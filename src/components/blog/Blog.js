import React, { useEffect, useState } from 'react'
import './Blog.css'
import axios from '../../axios'
import { Card, Button, Carousel, Image } from 'react-bootstrap'
import Comments from '../comments/Comments'

const Blog = ({ blog }) => {
  const [comments, setComments] = useState('')
  const [comment, setComment] = useState('')

  useEffect(() => {
    fetchItems()
    //getLoggedIn()
    // eslint-disable-next-line
  }, [])

  const fetchItems = async () => {
    try {
      await axios.get(`/comments/${blog._id}`).then((res, req) => {
        setComments(res.data)
        console.log(comments)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const sendComment = (e) => {
    e.preventDefault()
    // axios.post('/comments/submitNew', {
    //   blogId: blog._id,
    //   userName: userName,
    //   comment: input,
    // })
    setComment('')
  }
  return (
    <div>
      <Card className='procuct_card'>
        <Card.Img
          variant='top'
          src={blog.blogImage}
          rounded
          className='procuct_image'
        />

        <Card.Body>
          <Card.Title className='blog_title'>{blog.name}</Card.Title>
          <Card.Text className='blog_description'>{blog.description}</Card.Text>
          <Card.Text className='blog_like'>Like Count</Card.Text>
          <button class='btn'>
            <i class='bi bi-hand-thumbs-up-fill'>Like</i>
          </button>

          <Card.Text className='procuct_status'>
            <Comments comments={comments} />
            <div className='type_comment'>
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
