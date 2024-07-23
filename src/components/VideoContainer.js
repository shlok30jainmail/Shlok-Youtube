import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const VideoContainer = () => {

  const [videos, setVideos ] = useState([]);


    useEffect(()=>{
           getVideo();
    }, []);

    const getVideo = async()=>{
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        setVideos(json?.items);
        console.log(json);
    }
  return (

    <div className='flex flex-wrap'>
      {videos.map((video)=>{
        return <Link to={"/watch?v="+video.id}><VideoCard  {...video} key={video.id}/></Link>
      })}
    </div>
  )
}

export default VideoContainer
