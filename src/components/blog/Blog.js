import React, { useEffect, useState } from 'react'
import './Blog.css'
import { Card, Button, Carousel, Image } from 'react-bootstrap'

const Blog = ({ blog }) => {
  const [comment, setComment] = useState('')

  const sendComment = (e) => {
    e.preventDefault()
    // axios.post('/messages/new', {
    //   message: input,
    //   senderId: loginUserID,
    //   receiverId: selecteduser,
    // })
    setComment('')
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
              <form>
                <input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
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
