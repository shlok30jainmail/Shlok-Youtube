
import React, { useMemo, useState } from 'react'
import { findNthPrime } from '../utils/helper';

const Demo = () => {
    const [text, setText] = useState("");
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const prime = useMemo(()=>findNthPrime(text), [text]); // for heavy operations
    // const prime = findNthPrime(text); // it works very slow on heavy operation and other will also be slow

  
    return (
      <div className={`p-2 m-4 border border-black w-96 h-96 ${isDarkTheme ? "text-white bg-gray-900" : "bg-white"}`}>
        <div>
          <input 
            className='px-2 border border-black w-72' 
            type='number' 
            value={text}  
            onChange={(e) => setText(e.target.value)} 
          />
  
          <button 
            onClick={() => setIsDarkTheme(!isDarkTheme)} 
            className={`p-2 bg-blue-500 m-2 rounded-lg ${isDarkTheme ? "text-red-700" : ""}`}
          >
            Change Theme
          </button>
        </div>
  
        <div>
          <h1 className='mt-4 text-xl font-bold'>Nth number is : {prime}</h1>
        </div>
      </div>
    )
}

export default Demo;

