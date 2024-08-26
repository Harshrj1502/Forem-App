import React from 'react'
import { LiaCommentsSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
const Review = ({imglink}) => {
  return (
    <section className='flex w-[35vw] my-20 mx-36'>
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
        <p className='text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aliquid tempora ab quam odit officiis, doloremque dignissimos saepe ducimus dicta. Dolores molestiae quasi accusantium omnis sequi ut deleniti, magnam </p>
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

export default Review
