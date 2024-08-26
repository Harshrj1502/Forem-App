import React from 'react'
import { LiaCommentsSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
const ReviewSecond = ({imglink,text}) => {
  return (
    <section className='flex w-[55vw] mx-36'>
   <div className="w-[20vw] h-[25vh "> <img src={imglink} alt="" /></div>
    <div className='text-white flex flex-col  mx-3 gap-2' >
        <h1 className='text-lg font-light'>Atuhru</h1>  
        <div className='flex'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
        <p className='text-sm font-light'>{text}</p>
        <div className='flex gap-2 items-center'> 
        <AiOutlineLike />
        <LiaCommentsSolid />
        <h1>Open Review</h1>
        <h1>EXPAND</h1>
        </div>
    </div>
   </section>
  )
}

export default ReviewSecond
