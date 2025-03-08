import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName } from '../utils/helper';
import { generateRandomMsg } from '../utils/helper';


const LiveChat = () => {
  const [msg, setMsg]= useState({
    name:"",
    message:"",
  });
    const dispatch = useDispatch();
    const chatMessage = useSelector((store) => store.chat.message)
    useEffect(()=>{
      const i = setInterval(()=>{
        dispatch(addMessage({
            name:generateRandomName(),
            message: generateRandomMsg(15),
        }))
      }, 500)

      // remove iternval 
      return ()=> clearInterval(i);
      },[])
  return (
<div className='w-full h-full'>
<div className='flex flex-col-reverse w-full h-full p-3 m-2 overflow-y-scroll border border-black rounded-lg sm:ml-2 bg-slate-100'>
      {
        chatMessage.map((c,index)=>{
           return <ChatMessage name={c.name} message={c.message} key={index}/>
        })
      }

    </div>

     {/* Live comment section Button */}
    <div className='w-full m-2 border border-black' >
     <input value={msg.message} className='px-2 mx-2 border outline-none w-70 bg-slate-300 hover:border-blue-600'onChange={(e)=>{
        setMsg({
            name:"Shlok",
            message:e.target.value,
        })
     }}/>
      <button className='px-2 m-2 bg-green-400 rounded-lg ' onClick={()=>{
              dispatch(addMessage(msg));
              // again we set msg empty for empty input bar after commenting
              setMsg({
                name:"Shlok",
                message:"",
            })
      }}>send</button>
    </div>
</div>
  )
}

export default LiveChat;
