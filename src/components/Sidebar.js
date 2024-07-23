import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen); // it is also hook
    //Early return
    if(!isMenuOpen) return null;
  return (
    <div className='w-48 p-5 shadow-lg'>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className='pt-2 font-bold'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className='pt-2 font-bold'>watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar
