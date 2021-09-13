import React, { useState } from 'react'
import { Form, Col,  Button, Card, Container } from 'react-bootstrap'
import './AddBlog.css'
import axios from '../../axios'
import { Redirect } from 'react-router-dom'
// import AuthContext from '../../auth/AuthContext'

const AddBlog = () => {
  // const { loginUserRole } = useContext(AuthContext)
  const [blogDetails, setblogDetails] = useState({
    blogName: '',
    blogDescription: '',
    blogImage: '',
  })

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setblogDetails({ ...blogDetails, [name]: value })
  }
  const handleImage = (e) => {
    const value = e.target.files
    setblogDetails({ ...blogDetails, productImage: [...value] })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const bodyFormData = new FormData()
    blogDetails.blogImage.forEach((blogImageValue) => {
      bodyFormData.append('blogImage', blogImageValue)
    })
    bodyFormData.append('blogName', blogDetails.blogName)
    bodyFormData.append('blogDescription', blogDetails.blogDescription)
    axios
      .post('/blogs/submitNew', bodyFormData, {
        'Content-Type': 'multipart/form-data',
      })
      .catch((error) => {
        console.log(error)
      })
    setblogDetails({
      blogName: '',
      blogDescription: '',
      blogImage: '',
    })
    alert('Blog Added successfully')
  }
  // if (loginUserRole === 'User') {
  //   return <Redirect to='/products' />
  // }

  return (
    <div>
      <div className='m_20'>
        <h1 className='col-12 row align-items-center justify-content-center'>
          ADD A NEW Blog
        </h1>
      </div>
      <Container>
        <Card className='add_product_card'>
          <Form className='m_20' onSubmit={handleSubmit}>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label className='add_product_field'>Blog Name</Form.Label>
              <Form.Control
                type='text'
                name='productName'
                value={blogDetails.blogName}
                className='add_product_input_field'
                onChange={handleInput}
              ></Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label className='add_product_field'>
                Blog Description
              </Form.Label>
              <Form.Control
                type='text'
                name='productDescription'
                value={blogDetails.blogDescription}
                onChange={handleInput}
                className='add_product_input_field'
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label className='add_product_field'>
                Upload Images : &emsp;
              </Form.Label>
              <input
                type='file'
                name='productImage'
                className='add_product_input_field image_uploader'
                onChange={handleImage}
                multiple
              />
            </Form.Group>

            <Button variant='warning' size='lg' type='submit'>
              Add Blog
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  )
}

export default AddBlog
