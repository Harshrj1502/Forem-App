import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Trending = ({imglink,name}) => {
  return (
  <div className={'h-[25vh] w-[10vw] bg-red-300 justify-center flex bg-cover hover:opacity-[0.4] hover:cursor-pointer'}>
       <img src={imglink} alt="NA"  className={`object-cover `} /> 
       <p className="visibility: hidden hover:visibility: visible">{name}</p>

    </div>
  
  )
}

export default Trending;
