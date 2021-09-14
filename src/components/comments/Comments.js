import React, { useEffect, useState } from 'react'
import Comment from '../comment/Comment'

const Comments = () => {
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
      await axios.get(`/comments/${blogId}`).then((res, req) => {
        setComments(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Comment comments={comments} />
    </div>
  )
}

export default Comments
