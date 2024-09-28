import React from "react";
// import { IoLogIn, IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
// import GameSearch from "./GameSearch";
import Button from "./Button";
const Navbar = () => {
  return (
    <section
      className="flex justify-between items-center m-2 p-5 fixed w-full top-0 max-sm:p-3 max-lg:p-4 gap-4 max-sm:gap-2 max-lg:gap-3 bg-primary rounded "
      id="navbar"
    >
      <Link
        to={"/"}
        className="text-3xl text-black max-lg:text-2xl max-sm:text-xl font-semibold hover:cursor-pointer"
      >
        PlayRealm
      </Link>
      <ul className="flex text-base max-sm:text-xs max-lg:text-sm font-medium gap-4 items-center">
        {/* <Link
          to={"/Loginpage"}
          className="p-2 rounded-lg text-black hover:cursor-pointer hover:opacity-[0.5] hover:bg-secondary "
        >
          Login
        </Link>
        <Link
          to={"/RegisterPage"}
          className="p-2 rounded-lg text-black hover:cursor-pointer hover:opacity-[0.5] hover:bg-secondary"
        >
          Register
        </Link> */}
        <Link
          to={"/GamePage"}
          className="p-2 rounded-lg text-black hover:cursor-pointer hover:opacity-[0.5] hover:bg-secondary max-sm:hidden"
        >
          Games
        </Link>
        <Link
          to={"/"}
          className="p-2 rounded-lg text-black hover:cursor-pointer hover:opacity-[0.5] hover:bg-secondary max-sm:hidden"
        >
          Blog
        </Link>
      </ul>
      <span className="flex gap-2">
        <Button text={"LogIn"} style={"login"} onclick={""} />
        <Button text={"SignUp"} style={"signup"} onclick={""} />
      </span>
      {/* <span className="flex items-center bg-secondary rounded-lg">
        <GameSearch />
        <IoSearchSharp size={22} className="hover:cursor-pointer"/>
      </span> */}
      {/* <li className="flex items-center hover:cursor-pointer gap-2">
        <input type="text" className='text bg-secondary text-grey rounded-md px-2 py-1 outline-none placeholder:font-normal placeholder:text-sm' placeholder='Search' /> 
      </li> */}
    </section>
  );
};

export default Navbar;
