import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import Logo from './assets/images/YouTube_logo.png'
const Head = ()=>{

const dispatch = useDispatch(); // this is a hook
const toggleMenuHandler= ()=>{
dispatch(toggleMenu());
}
    return(
      <div className='grid items-center grid-flow-col p-3 m-2 shadow-lg'>
        <div className='flex items-center col-span-1'> 
            <img src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" alt="hamburger" className='w-10 h-10 cursor-pointer'
              onClick={()=> toggleMenuHandler()}
              />
              <a href="/">
            {/* <img src="https://cdn.iconscout.com/icon/free/png-256/free-youtube-81-189777.png" alt="Logo" className='w-20 mx-5'/> */}
            <img src={Logo} alt="Logo" className='w-20 mx-5 p'/>

            </a>
        </div>


        <div className='flex items-center justify-center col-span-10 '>
            <input type="text" className='w-1/2 h-10 p-2 border border-gray-400 rounded-l-full outline-none '/>
            <button className='h-10 px-5 py-2 bg-gray-100 border border-gray-300 rounded-r-full'>🔍</button>
        </div>


        <div className='col-span-1'>
            <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" alt="user-icon" className='w-16'/>
        </div>
      </div>
    );
}

export default Head;