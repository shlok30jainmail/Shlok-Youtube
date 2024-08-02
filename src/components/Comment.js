import React from 'react'
const Comment = ({data}) => {
    const {name, text, replies} = data;
  return (
    <div className='flex flex-row m-4'>
        <div>
        <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" alt="user-image"  className='w-12'/>

        </div>
        <div className='px-3 bg-slate-300 w-[70%] rounded-lg p-2 hover:bg-slate-200'>
            <h2>{name}</h2>
            <h3>{text}</h3>
            {/* <h3 className='mx-2'>{replies}</h3> */}
        </div>
    </div>
  )
}

// export default Comment;
// import { CommentList } from "./CommentContainer";

// const Comment = ({ data }) => {
//     return (
//       <div className="p-2 m-2 border border-gray-300 rounded">
//         <p><strong>{data.name}</strong>: {data.text}</p>
//         {data.replies && data.replies.length > 0 && (
//           <div className="ml-4">
//             <CommentList data={data.replies} />
//           </div>
//         )}
//       </div>
//     );
//   };

  export default Comment;
