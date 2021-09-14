import React, { useEffect, useState } from 'react'
import Comment from '../comment/Comment'
import axios from '../../axios'

const Comments = ({blog}) => {
  const [comments, setComments] = useState([])

  //will be changed later
  const blogId=''

  useEffect(() => {
    fetchItems()
    //getLoggedIn()
    // eslint-disable-next-line
  }, [])

  const fetchItems = async () => {
    try {
      await axios.get(`/comments/${blog.blogId}`).then((res, req) => {
        setComments(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {comments.map((comment) => {
        return <Comment key={comment._id} comment={comment} />
      })}
    </div>
  )
}

export default Comments
