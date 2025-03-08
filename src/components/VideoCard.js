import React from 'react'

const VideoCard = ({snippet, statistics}) => {
   const { thumbnails, channelTitle, publishedAt, title} = snippet;
  return (
    <div className='flex flex-col items-center justify-center m-2 shadow-lg cursor-pointer min-w-56 sm:max-w-60 sm:text-left hover:scale-105' >
         <img src={thumbnails.medium.url} alt="card-img" className='rounded-lg'/>
          {/* <h2 className='font-bold'>{channelTitle}</h2> */}
          <h2 className='m-2 text-sm font-bold text-center sm:text-left'>{title}</h2>
          {/* <h2 className='text-gray-600 '><span className="p-2">{statistics.viewCount} views</span>{statistics.likeCount}likes</h2>
          <h2 className='text-gray-600 '>{publishedAt}</h2> */}
          <h2 className='text-sm font-semibold text-gray-500 sm:text-left sm:w-64 sm:pl-2'>{channelTitle}</h2>
          <h2 className='text-sm font-semibold text-gray-500 sm:text-left sm:w-64 sm:pl-2'>{statistics.viewCount} views</h2>




          {/* <p>{description}</p> */}

    </div>
  )
}

export default VideoCard
