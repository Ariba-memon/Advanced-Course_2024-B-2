import React from 'react'

const CommentList = ({comments}) => {
  return (
    <div>
      <h3>Comments:</h3>
      {comments.map(comment =>(
        <div key={comment.postedBy + ":" + comment.text}>
            <h4>UserName:{comment.postedBy}</h4>
            <p>UserComment:{comment.text}</p>
            </div>
      ))

      }
    </div>
  )
}

export default CommentList
