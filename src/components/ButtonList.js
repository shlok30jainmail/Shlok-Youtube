import React from 'react'
import Button from './Button'

const btnList = ["All", "Value", "Music", "Sports", "News", "Cricket", "Movies", "Cooking", "Dance", "Love", "Songs"];

const ButtonList = () => {
  return (
    <div className='flex flex-wrap '>
      {/* <Button name="All"/>
      <Button name="All"/> */}
      {btnList.map((item)=>{
         return <Button name={item}/>
      })}

    </div>
  )
}

export default ButtonList
