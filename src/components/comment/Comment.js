import React from 'react'
import './Comment.css'

const Comment = ({ comment }) => {
  return <div>
    {comment.comment}
  </div>
}

export default Comment
