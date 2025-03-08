import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import Logo from './assets/images/YouTube_logo.png'
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import {cacheResults} from '../utils/searchSlice';
const Head = ()=>{
// for search 
const [searchQuery, setSearchQuery] = useState("");
console.log(searchQuery);

const [suggestion, setSuggetion] = useState([]);
const [showSuggestion, setShowSuggestion] = useState(false);
// const suggestion = ["hi", "hello"];


// subscribe to the store
const searchCache = useSelector((store)=>store.search);

useEffect(()=>{
  const timer = setTimeout(()=> {
    if(searchCache[searchQuery]){
          setSuggetion(searchCache[searchQuery]);
    }else{
          getSearchSuggestion();
    }
  },200);

  return()=>{
    clearTimeout(timer);
  }

},[searchQuery]);

const getSearchSuggestion = async()=>{
  const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
  const json = await data.json();
  setSuggetion(json[1]);

  // update search resalt using dispatch
  dispatch(cacheResults(
    {
      [searchQuery] : json[1],
    }
  ));
  console.log(json);
}
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
            <img src={Logo} alt="Logo" className='hidden w-20 sm:block'/>

            </a>
        </div>


        <div className='flex flex-col'>
          <div className='flex items-center justify-center col-span-10 '>
          <input type="text" className='w-3/4 h-10 p-2 border border-gray-400 rounded-l-full outline-none hover:border-blue-600 '
            value={searchQuery} 
            onChange={(e)=>{
                setSearchQuery(e.target.value);
            }}

            onFocus={()=> setShowSuggestion(true)}
             onBlur={()=>setShowSuggestion(false)}
            />
            <button className='h-10 px-5 py-2 bg-gray-100 border border-gray-300 rounded-r-full'>🔍</button>
          </div>

          <div className='fixed z-10 bg-white rounded-lg shadow-lg m-11'>
            <ul className='px-2'>
              {/* <li>Iphone</li>
              <li>Ipho</li>
              <li>Ipho-12</li>
              <li>Iphone-15</li> */}
              {/* {
                showSuggestion === true? suggestion.map((x)=>{
                  return <li className='cursor-pointer hover:bg-slate-100' key={x}>{x}</li>
                }):[]

              } */}

               {             
                showSuggestion && (suggestion.map((x)=>{
                  return <li className='cursor-pointer hover:bg-slate-100' key={x}>{x}</li>
                }))

              }

            </ul>
          </div>
         </div>


        <div className='hidden col-span-1 sm:block'>
            <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" alt="user-icon" className='max-w-16'/>
        </div>
      </div>
    );
}

export default Head;