import React from 'react'
import './Comment.css'

const Comment = ({ comment }) => {
  return (
    <div>
      <h1>{comment.userName}</h1>
      <h1>{comment.comment}</h1>
    </div>
  )
}

export default Comment
