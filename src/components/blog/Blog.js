import React, { useEffect, useState } from 'react'
import './Blog.css'
import axios from '../../axios'
import { Card, Button, Carousel, Image } from 'react-bootstrap'
import Comments from '../comments/Comments'

const Blog = ({ blog }) => {
  const [comments, setComments] = useState('')

  useEffect(() => {
    fetchItems()
    //getLoggedIn()
    // eslint-disable-next-line
  }, [])

  const fetchItems = async () => {
    try {
      await axios.get(`/comments/${blog._id}`).then((res, req) => {
        setComments(res.data)
        console.log(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const sendComment = (e) => {
    e.preventDefault()
    // axios.post('/messages/new', {
    //   userId: loginUserID,
    //   blogId: blog._id,
    //   comment: input,
    // })
    setComments('')
  }
  return (
    <div>
      <Card className='procuct_card'>
        <Carousel fade>
          {/* {blog.blogImage.map((images, index) => {
            return ( */}
          <Carousel.Item>
            {/* <Image
              src={'http://flybuyapi.aritrarivu.co.in/' + images}
              rounded
              className='cart_image'
            /> */}
            <Image src={blog.blogImage} rounded className='cart_image' />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title className='procuct_title'>{blog.name}</Card.Title>
          <Card.Text className='procuct_description'>
            {blog.description}
          </Card.Text>
          <Card.Text className='procuct_price'>
            Like Count
            <button class='btn'>
              <i class='bi bi-hand-thumbs-up-fill'>Like</i>
            </button>
          </Card.Text>
          <Card.Text className='procuct_status'>
            <div className='chat_footer'>
              {/* <Comments blog={blog} /> */}

              <form>
                <input
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder='Type a Comment'
                  type='text'
                />
                <Button onClick={sendComment} type='submit'>
                  Type a Comment
                </Button>
              </form>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Blog
