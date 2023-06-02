import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../../api/api_instace'
import './listArticle.css'
import swal from 'sweetalert'
import slugify from 'slugify'

import { Button } from '../../components'

const ListArticle = () => {
  // deklarasi hooks
  const [articles, setArticles] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [articlesPerPage] = useState(7) // Jumlah artikel per halaman
  const [searchTerm, setSearchTerm] = useState('') // Kata kunci pencarian

  // pasang useNavigate
  const navigate = useNavigate()
  useEffect(() => {
    document.title = 'List Article'

    const getArticle = async () => {
      try {
        const res = await instance.get(`articles`)
        console.log(res)
        setArticles(res.data.data)
      } catch (error) {
        console.error(error)
      }
    }

    getArticle()
  }, [])
  // pasang handleDelete
  const handleDelete = async (id) => {
    swal({
      title: 'Confirmation',
      text: 'Do you want to delete?',
      icon: 'warning',
      buttons: ['Cancel', 'Delete'],
      dangerMode: true,
    }).then(async (confirmed) => {
      if (confirmed) {
        try {
          await instance.delete(`article/delete/${id}`)
          swal('Success!', 'Data berhasil dihapus!', 'success')
          setArticles(articles.filter((article) => article.id_article !== id))
          navigate('/')
        } catch (error) {
          console.log(error)
          swal('Error!', 'Terjadi kesalahan saat menghapus data!', 'error')
        }
      }
    })
  }

  // Mencari artikel berdasarkan judul (title)
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Mengatur halaman saat ini
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // Menghitung total halaman
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  // Menghitung indeks artikel yang akan ditampilkan di halaman saat ini
  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage + 1
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle - 1,
    indexOfLastArticle
  )

  // Menghasilkan tombol halaman
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <div className='container mt-5'>
        <h1 className='text-center title'>All Articles </h1>
        <div className='row'>
          <div className='col-md-9'>
            <Link to='/add-article'>
              <Button
                label='add article '
                variant='outline-primary'
                icon='plus'
                className='color'
              />
            </Link>
          </div>
          <div className='col-md-3'>
            <form className='d-flex' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
        </div>

        <br />
        <table className='table table-striped '>
          <thead className='text-center  color-head'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Title</th>
              <th scope='col'>Description</th>
              <th scope='col'>Image</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody className='table-group-divider text-center'>
            {currentArticles.map((article, index) => (
              <tr key={index} className='align-self-center'>
                <td scope='row' className='align-middle'>
                  {indexOfFirstArticle + index}
                </td>
                {/* <td className="align-middle">{article.title}</td> */}
                <td className='align-middle'>
                  {article.title.split(' ').filter((word) => word !== '')
                    .length > 12
                    ? article.title.split(' ').slice(0, 12).join(' ') + ' ...'
                    : article.title}
                </td>
                <td className='align-middle'>
                  {article.description.length > 20
                    ? article.description.substr(0, 20) + '...'
                    : article.description}
                </td>

                <td>
                  <img
                    src={article.image}
                    className='rouded'
                    style={{ width: '50px' }}
                  />
                </td>
                <td className='align-middle'>
                  <div className='btn-group '>
                    {/* <Link to={`/update-article/${article.id_article}`}>
                      <Button icon='edit' variant='outline-primary mx-1' />
                    </Link> */}
                    <Link
                      to={`/update-article/${slugify(article.title, {
                        lower: true,
                        strict: true,
                      })}`}
                    >
                      <Button icon='edit' variant='outline-primary mx-1' />
                    </Link>
                    <Link to='#'>
                      <Button
                        onClick={() => handleDelete(article.id_article)}
                        icon='trash'
                        variant='outline-danger'
                      />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* pasang pagination */}
        <nav aria-label='Page navigation example'>
          <ul className='pagination justify-content-end'>
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button
                className='page-link'
                onClick={() => paginate(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`page-item ${
                  currentPage === number ? 'active' : ''
                }`}
              >
                <button className='page-link' onClick={() => paginate(number)}>
                  {number}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? 'disabled' : ''
              }`}
            >
              <button
                className='page-link'
                onClick={() => paginate(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default ListArticle
