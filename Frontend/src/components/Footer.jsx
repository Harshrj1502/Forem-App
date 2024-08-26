import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { BsThreads } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <section id='footer ' className='flex p-2 py-4 justify-around bg-secondary text-grey mb-0 '>
      <div>
      <ul className='flex gap-2'>
        <li className='text-base font-medium cursor-pointer'>About</li>
        <Link to="/ContactPage"> <li className='text-base font-medium cursor-pointer' >Contact</li></Link>
        <li className='text-base font-medium cursor-pointer'>Backers</li>
        <li className='text-base font-medium cursor-pointer'>Terms</li>
        <li className='text-base font-medium cursor-pointer'>Privacy</li>
      </ul>
      <div className='flex gap-2 text-sm'>
      <h1>@Lorem</h1>
      <h1>V1.1.1.1</h1>
      <h1>Powered by 0101</h1>
      </div>
      </div>
      <div className='flex items-center gap-2'>
      <FaDiscord size={25} />
      <BsThreads size={25}/>
      <FaXTwitter size={25}/>
      </div>
    </section>
  )
}

export default Footer
