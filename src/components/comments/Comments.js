import React, { useEffect, useState } from 'react'
import Comment from '../comment/Comment'
import axios from '../../axios'

const Comments = ({ comments }) => {
  console.log(comments)

  return (
    <div>
      {/* {comments.map((comment, index) => {
        return (
          <div key={comment._id}>
            <Comment comment={comment} />
          </div>
        )
      })} */}
    </div>
  )
}

export default Comments
