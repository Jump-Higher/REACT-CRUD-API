import React from 'react'
import { Gap } from '../../components'

const AddArticle = () => {
  return (
    <>
      <div className='container'>
        <Gap height={170} />
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header text-center'>Form Add Article</div>
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

                  <button type='submit' className='btn btn-primary mt-2 '>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddArticle
