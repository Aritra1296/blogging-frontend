import React, { useEffect, useState } from 'react'
import './Blog.css'
import axios from '../../axios'
import { Card, Button, Carousel, Image } from 'react-bootstrap'
import Comments from '../comments/Comments'
import Pusher from 'pusher-js'

const Blog = ({ blog }) => {
  const [comments, setComments] = useState([])
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

  useEffect(() => {
    const pusher = new Pusher('a2a19cf82e2bbe61e63b', {
      cluster: 'ap2',
    })

    const channel = pusher.subscribe('comments')
    channel.bind('inserted', (newComment) => {
      setComments([...comments, newComment])
    })
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [comments])

  const sendLike = async (e) => {
    e.preventDefault()
    await axios.patch(`/blogs/addLike`, {
      blogId: blog._id,
      userId: '613dbbc72c99018d819aaa92',
    })
  }

  const removeLike = async (e) => {
    e.preventDefault()
    await axios.patch(`/blogs/removeLike`, {
      blogId: blog._id,
      userId: '613dbbc72c99018d819aaa92',
    })
  }

  const sendComment = (e) => {
    e.preventDefault()
    axios.post('/comments/submitNew', {
      blogId: blog._id,
      userName: 'Aritra',
      comment: comment,
    })
    setComment('')
  }
  return (
    <div>
      <Card className='procuct_card'>
        <Card.Img
          variant='top'
          src={'http://localhost:3005/' + blog.blogImage}
          rounded
          className='procuct_image'
        />

        <Card.Body>
          <Card.Title className='blog_title'>{blog.name}</Card.Title>
          <Card.Text className='blog_description'>{blog.description}</Card.Text>
          <Card.Text className='blog_like'>{blog.blogLike}</Card.Text>
          <button class='btn'>
            <i class='bi bi-hand-thumbs-up-fill' onClick={sendLike}>
              Like
            </i>
          </button>
          <button class='btn'>
            <i class='bi bi-hand-thumbs-up-fill' onClick={removeLike}>
              Remove Like
            </i>
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
