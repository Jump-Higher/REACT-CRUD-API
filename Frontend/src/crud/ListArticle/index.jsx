import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import instance from '../../api/api_instace'

import { Button, IconPencil, IconTrash } from '../../components'

const ListArticle = () => {
  const [articles, setArticles] = useState([])

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
  return (
    <>
      <div className='container mt-5'>
        <h1 className='text-center'>All Articles </h1>
        <Link to='/add-article'>
          <Button to='/add-article' label='add article +' variant='primary' />
        </Link>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Title</th>
              <th scope='col'>Description</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody className='table-group-divider'>
            {articles.map((article, index) => (
              <tr key={index}>
                <th scope='row'>{(index = index + 1)}</th>
                <td>{article.title}</td>
                <td>{article.description}</td>
                <td>
                  <Link to={`/update-article/${article.id_article}`}>
                    <IconPencil />
                  </Link>
                  <Link to='#'>
                    <IconTrash />
                  </Link>
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
