import React from 'react'
import Comment from './Comment'

// nth level comments data
const commentData = [
  {
    name: "Shlok",
    text: "This is awesome",
    replies: [
      {
        name: "Shlok",
        text: "This is awesome",
        replies: [
          {
            name: "Shlok",
            text: "This is awesome",
            replies: [
              {
                name: "Shlok",
                text: "This is awesome",
                replies: []
              },
            ]
          },
          {
            name: "Shlok",
            text: "This is awesome",
            replies: [
              {
                name: "Shlok",
                text: "This is awesome",
                replies: []
              },
              {
                name: "Shlok",
                text: "This is awesome",
                replies: []
              },
            ]
          },
        ]
      },
      {
        name: "Shlok",
        text: "This is awesome",
        replies: []
      },
      {
        name: "Shlok",
        text: "This is awesome",
        replies: []
      },
    ]
  },
  {
    name: "Shlok",
    text: "This is awesome",
    replies: []
  },
  {
    name: "Shlok",
    text: "This is awesome",
    replies: []
  },
  {
    name: "Shlok",
    text: "This is awesome",
    replies: []
  },
  {
    name: "Shlok",
    text: "This is awesome",
    replies: []
  },
  {
    name: "Shlok",
    text: "This is awesome",
    replies: []
  },
]

export const CommentList = ({ data }) => {
  return data.map((comment, index) => (
    <div>
   <Comment key={index} data={comment} />
   <div className='pl-5 m-2'>
      <CommentList data={comment.replies}/>
   </div>
  </div>
  ))
}

const CommentContainer = () => {
  return (
    <div className='p-3 m-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentList data={commentData} />
    </div>
  )
}

export default CommentContainer;
