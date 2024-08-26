import { React, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
function Loginpage() {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5170/Loginpage", { username, password })
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center bg-primary gap-5 p-36">
        <h1 className="text-5xl text-grey">WELCOME BACK</h1>
        {/* onSubmit={handlesubmit} */}
        <form
          className="flex flex-col gap-5 justify-center my-8 "
          onSubmit={handlesubmit}
        >
          <input
            className="bg-secondary text-grey py-2 rounded-md w-[40vw] outline-none placeholder:text-sm px-4"
            type="text"
            placeholder="Email or Username"
            name="username "
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="bg-secondary text-grey py-2 rounded-md w-[40vw] outline-none placeholder:text-sm px-4"
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex gap-2">
            <input type="checkbox" />
            <label className="text-white text-sm">Remember Me</label>
          </div>
          <button className="bg-pink text-white p-2 rounded-md w-[40vw] hover:opacity-[0.8] font-light text-sm">
            LogIn
          </button>
        </form>
        <div className="flex flex-col text-center text-sm">
          <Link
            to={"/RegisterPage"}
            className="cursor-pointer  text-white opacity-[0.8] hover:opacity-100"
          >
            New User? Sign up here{" "}
          </Link>
          <Link className="cursor-pointer   text-white opacity-[0.8] hover:opacity-100">
            Forgot Your PassWord?{" "}
          </Link>
          <Link className="cursor-pointer text-white opacity-[0.8] hover:opacity-100">
            Didn't receive confirmation instructions?
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Loginpage;
