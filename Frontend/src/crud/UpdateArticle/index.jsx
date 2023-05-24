// import React from 'react'
import { Button, Gap } from '../../components'

const UpdateArticle = () => {
  return (
    <>
    <div className='container'>
      <Gap height={170} />
      <h1 className='text-center'> Update Article</h1>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header text-center'>Form Update Article</div>
            <div className='card-body'>
              <form>
                <div className='form-group'>
                  <label htmlFor=''>Title</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Title...'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor=''>Desccription</label>
                  <textarea
                    className='form-control'
                    placeholder='Enter Description...'
                  ></textarea>
                </div>
                <Gap height={10} />
                <div className='btn-group'>
                  <Button to='/' label='Back' variant='secondary' />
                  <Gap width={20} />
                  <Button label='Update Article' variant='success' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default UpdateArticle