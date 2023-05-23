import React from 'react'
import { Link } from 'react-router-dom'
import { Button, IconPencil, IconTrash } from '../../components'

const ListArticle = () => {
  return (
    <>
      <div className='container mt-5'>
        <h1 className='text-center'>All Artike </h1>
        <Button to='/add-article' label='add article +' variant='primary' />
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
            <tr>
              <th scope='row'>1.</th>
              <td>Article 1</td>
              <td>Description 1</td>
              <td>
                <Link to='#'>
                  <IconPencil />
                </Link>
                <Link to='#'>
                  <IconTrash />
                </Link>
              </td>
            </tr>
            <tr>
              <th scope='row'>2.</th>
              <td>Article 2</td>
              <td>Description 2</td>
              <td>
                <Link to='#'>
                  <IconPencil />
                </Link>
                <Link to='#'>
                  <IconTrash />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListArticle
