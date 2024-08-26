import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import {  Link } from "react-router-dom";
const Navbar = () => {
  return (
    <section className='flex justify-around items-center p-5 bg-primary text-grey ' id='navbar'>
        <Link to={"/"} className='text-2xl font-semibold hover:cursor-pointer hover:opacity-[0.5]'>Lorem</Link>
        <ul className='flex text-base font-medium gap-4 items-center'>
        <Link to={"/Loginpage"} className='hover:cursor-pointer hover:opacity-[0.5]'>Login</Link>
        <Link to={"/RegisterPage"} className='hover:cursor-pointer hover:opacity-[0.5]'>Register</Link>
        <Link to={"/GamePage"} className='hover:cursor-pointer hover:opacity-[0.5]'>Games</Link>
            <li className='flex items-center hover:cursor-pointer gap-2'>
                <input type="text" className='text bg-secondary text-grey rounded-md px-2 py-1 outline-none placeholder:font-normal placeholder:text-sm' placeholder='Search' />
            <IoSearchSharp size={20}/></li>
        </ul>
    </section>
  )
}

export default Navbar
