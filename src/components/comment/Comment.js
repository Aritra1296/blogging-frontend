import React from 'react'
import './Comment.css'
import moment from 'moment'

const Comment = ({ comment }) => {
  return (
    <div>
      <h1>{comment.userName}</h1>
      <h1>{comment.comment}</h1>
      <h1>{moment(comment.timestamp).format('llll')}</h1>
    </div>
  )
}

export default Comment
