import React from 'react'
import './Comment.css'
import moment from 'moment'

const Comment = ({ comment }) => {
  return (
    <div>
      <div className='comment_userName'>{comment.userName}</div>
      <div className='comment_description'>{comment.comment}</div>
      <div className='comment_timestamp'>
        {moment(comment.timestamp).format('llll')}
      </div>
    </div>
  )
}

export default Comment
