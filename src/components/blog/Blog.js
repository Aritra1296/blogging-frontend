import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { Card, Button, Form } from 'react-bootstrap'
import Comments from '../comments/Comments'
import store from '../../reduxStore/Store'
import { fetchUser } from '../../actions/Action'

const Blog = ({ blog }) => {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  useEffect(() => {
    store.dispatch(fetchUser())
    // eslint-disable-next-line
  }, [])

  //COMMENT SECTION START
  useEffect(() => {
    fetchComments()
    // eslint-disable-next-line
  }, [])

  const fetchComments = async () => {
    await axios
      .get(`/comments/${blog._id}`)
      .then((res, req) => {
        setComments(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const sendComment = (e) => {
    e.preventDefault()
    axios
      .post('/comments/submitNew', {
        blogId: blog._id,
        userName: store.getState().default.user.userName,
        comment: comment,
      })
      .then(() => {
        window.location.reload()
      })
      .catch((error) => {
        console.log(error)
      })
    setComment('')
  }
  //COMMENT SECTION END

  //LIKE SECTION START
  const sendLike = async (e) => {
    e.preventDefault()
    await axios
      .patch(`/blogs/addLike`, {
        blogId: blog._id,
        userId: store.getState().default.user.userId,
      })
      .then(() => {
        window.location.reload()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const removeLike = async (e) => {
    e.preventDefault()
    await axios
      .patch(`/blogs/removeLike`, {
        blogId: blog._id,
        userId: store.getState().default.user.userId,
      })
      .then(() => {
        window.location.reload()
      })
      .catch((error) => {
        console.log(error)
      })
  }
  //LIKE SECTION END

  return (
    <Card className='mb-5'>
      <Card.Img
        variant='top'
        src={'http://blogosphereapi.aritrarivu.co.in/' + blog.blogImage}
        style={{ maxHeight: '30rem', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{blog.name}</Card.Title>
        <Card.Text>{blog.description}</Card.Text>

        <button className='btn btn-success'>
          <i className='bi bi-hand-thumbs-up-fill me-2' onClick={sendLike}></i>
          <span className='visually-hidden'>Like</span>
          <span>{blog.blogLike}</span>
        </button>
        <button className='btn btn-danger ms-2'>
          <i
            className='bi bi-hand-thumbs-down-fill me-2'
            onClick={removeLike}
          ></i>
          <span className='visually-hidden'>Dislike</span>
        </button>

        <div className='mt-3'>
          <form>
            <Form.Group controlId='comment'>
              <Form.Label className='visually-hidden'>Your comment:</Form.Label>
              <Form.Control
                type='text'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder='Enter your comment'
              />
            </Form.Group>

            <Button onClick={sendComment} type='submit' className='mt-2'>
              Comment
            </Button>
          </form>
        </div>

        <div className='mt-3 p-3' style={{ border: '1px solid #ccc' }}>
          <p className='fw-bold'>Comments from other people:</p>
          <Comments comments={comments} />
        </div>
      </Card.Body>
    </Card>
  )
}

export default Blog
