import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../../api/api_instace'

import { Button } from '../../components'

const ListArticle = () => {
  const [articles, setArticles] = useState([])
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
    const confirmed = window.confirm('Do you want to delete?')
    if (confirmed) {
      try {
        await instance.delete(`article/delete/${id}`)
        window.alert('Data berhasil dihapus!')
        // jika data article yang dicari tidak ada akan memperbaharui data
        setArticles(articles.filter((article) => article.id_article !== id))
        navigate('/')
      } catch (error) {
        console.log(error)
        window.alert('Terjadi kesalahan saat menghapus data')
      }
    }
  }
  return (
    <>
      <div className='container mt-5'>
        <h1 className='text-center'>All Articles </h1>
        <Link to='/add-article'>
          <Button label='add article ' variant='outline-primary' icon='plus' />
        </Link>
        <br />
        <table className='table table-striped '>
          <thead className='text-center table-primary'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Title</th>
              <th scope='col'>Description</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody className='table-group-divider text-center'>
            {articles.map((article, index) => (
              <tr key={index}>
                <th scope='row'>{(index = index + 1)}</th>
                <td>{article.title}</td>
                <td>{article.description}</td>
                <td>
                  <div className='btn-group '>
                    <Link to={`/update-article/${article.id_article}`}>
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
      </div>
    </>
  )
}

export default ListArticle
