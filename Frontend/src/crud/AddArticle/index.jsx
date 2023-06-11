import { Button, Gap } from '../../components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import instance from '../../api/api_instace'
import { Link } from 'react-router-dom'
import './addArticle.css'
import swal from 'sweetalert'

const AddArticle = () => {
  // deklarasi hooks
  const [addArticle, setAddArticle] = useState({
    title: '',
    description: '',
    image: null,
  })
  // pasang useNavigate
  const navigate = useNavigate()

  // pasang handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await instance.post(`article/create`, addArticle)
      console.log(res.data.image)
      swal({
        title: 'Success!',
        text: 'Data Article Berhasil Ditambahkan!',
        icon: 'success',
        button: 'close!',
      })
      navigate('/')
    } catch (error) {
      console.error(error)
      // alert("Terjadi kesalahan saat menyimpan data!");
      swal({
        title: 'Error!',
        text: 'Terjadi kesalahan saat menyimpan data!',
        icon: 'error',
        button: 'close!',
      })
    }
  }
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0]

    if (selectedImage) {
      const reader = new FileReader()

      reader.onload = () => {
        setAddArticle({
          ...addArticle,
          image: selectedImage,
          previewImage: reader.result,
        })
      }

      reader.readAsDataURL(selectedImage)
    }
  }
  return (
    <>
      <div className='container'>
        <Gap height={170} />
        <h1 className='text-center title'> Add Article</h1>
        <br />
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header text-center  text-bg'>
                Form Add Article
              </div>
              <div className='card-body'>
                <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input
                      type='text'
                      className='form-control'
                      id='title'
                      maxLength={20}
                      placeholder='Enter Title...'
                      value={addArticle.title}
                      onChange={(e) =>
                        setAddArticle({
                          ...addArticle,
                          title: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='description'>Description</label>
                    <textarea
                      className='form-control'
                      id='description'
                      placeholder='Enter Description...'
                      value={addArticle.description}
                      onChange={(e) =>
                        setAddArticle({
                          ...addArticle,
                          description: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                  <div className='form-group'>
                    {addArticle.previewImage && (
                      <img
                        src={addArticle.previewImage}
                        alt='Preview'
                        style={{
                          width: '100px',
                          height: '100px',
                          marginTop: '10px',
                          marginBottom: '10px',
                        }}
                      />
                    )}
                    <br />
                    <input
                      type='file'
                      id='image'
                      onChange={handleImageChange}
                    />
                  </div>
                  <Gap height={10} />
                  <div className='btn-group'>
                    <Link to='/'>
                      <Button
                        icon='arrow-left'
                        label='Back '
                        variant='outline-secondary'
                      />
                    </Link>
                    <Gap width={20} />
                    <Button
                      label='Add Article'
                      variant='outline-success'
                      type='submit'
                      className='color'
                    />
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

export default AddArticle
