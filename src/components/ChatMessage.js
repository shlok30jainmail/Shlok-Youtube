import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex m-2 '>
    <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" alt="user-icon" className='max-w-10 max-h-6'/>
    <span className='mr-2 font-bold'>{name}</span>
    <span>{message}</span>
    </div>
  )
}

export default ChatMessage
