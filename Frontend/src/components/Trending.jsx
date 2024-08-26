import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Trending = ({imglink}) => {
  return (
  <div className={'h-[25vh] w-[10vw] bg-red-300 justify-center flex bg-cover hover:opacity-[0.4] hover:cursor-pointer'}>
       <img src={imglink} alt="NA" className='object-cover' /> 
    </div>
  
  )
}

export default Trending;
