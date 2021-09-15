import React, { useEffect, useState } from 'react'
import Blog from '../blog/Blog'
import { Row, Col, CardGroup } from 'react-bootstrap'
import axios from '../../axios'
// import AuthContext from '../../auth/AuthContext'

const Blogs = () => {
  // const { loginUserID, getLoggedIn } = useContext(AuthContext)
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetchItems()
    //getLoggedIn()
    // eslint-disable-next-line
  }, [])

  const fetchItems = async () => {
    try {
      await axios
        .get(`/blogs/all`)
        .then((res, req) => {
          setBlogs(res.data)
        })
    } catch (error) {
      console.log(error)
    }
  }

 

  return (
    <div className='m_20'>
      <CardGroup>
        <Row xs={1} md={1} className='g-4'>
          {blogs.map((blog, index) => {
            return (
              <Col key={blog.name}>
                <Blog blog={blog} />
              </Col>
            )
          })}
        </Row>
      </CardGroup>
    </div>
  )
}

export default Blogs
