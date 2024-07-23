import React from 'react'

const VideoCard = ({snippet, statistics}) => {
   const { thumbnails, channelTitle, publishedAt, title} = snippet;
  return (
    <div className='flex flex-col items-center justify-center w-64 m-2 shadow-lg cursor-pointer hover:scale-105' >
         <img src={thumbnails.medium.url} alt="card-img" className='rounded-lg'/>
          <h2 className='font-bold'>{channelTitle}</h2>
          {/* <h2 className='font-bold'>{title}</h2> */}
          <h2 className='text-gray-600 '><span className="p-2">{statistics.viewCount} views</span>{statistics.likeCount}likes</h2>
          <h2 className='text-gray-600 '>{publishedAt}</h2>


          {/* <p>{description}</p> */}

    </div>
  )
}

export default VideoCard
