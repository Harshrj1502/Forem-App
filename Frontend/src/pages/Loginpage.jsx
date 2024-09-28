import { React, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import RegisterPage from "./RegisterPage";
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
    <div className="h-screen bg-secondary">
      <span className=" bg-secondary h-10">
        <h1>LOGO</h1>
      </span>
      <div className="bg-secondary flex flex-col gap-5 justify-center items-center min-h-[calc(100vh-12.5rem)] ">
        <h1 className="text-5xl max-sm:text-3xl max-lg:text-4xl">
          Welcome Back 👋
        </h1>
        <section className="flex flex-col p-10 max-sm:p-10 max-lg:p-16 gap-5 bg-primary items-center rounded-lg">
          {/* onSubmit={handlesubmit} */}
          <form
            className="flex flex-col gap-5  justify-center items-center rounded-lg"
            onSubmit={handlesubmit}
          >
            <input
              className="bg-secondary hover:bg-primary rounded-md w-[25vw] max-sm:w-[70vw] max-lg:w-[45vw] py-4 px-4 hover:border-2 outline-none border-2 border-secondary"
              type="text"
              placeholder="Email"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="bg-secondary hover:bg-primary rounded-md w-[25vw] max-sm:w-[70vw] max-lg:w-[45vw]  py-4 px-4 hover:border-2 outline-none border-2 border-secondary"
              type="password"
              placeholder="Password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <div className="flex gap-2">
            <input type="checkbox" />
            <label className="text-white text-sm">Remember Me</label>
          </div> */}
            {/* <button className="bg-pink text-white p-2 rounded-md w-[40vw] hover:opacity-[0.8] font-light text-sm">
            LogIn
          </button> */}
            <p className="">Forget my password</p>
            <Button style={"loginpage"} text={"SignIn"} />
          </form>
          {/* <div className="flex flex-col text-center text-sm">
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
        </div> */}
        </section>
      </div>
      <div className="text-center flex flex-col h-40 gap-5">
        <p className="text-sm max-sm:text-xs">
          By clicking "Sign In with Google", you agree to Terms of Service and
          Privacy Policy
        </p>
        <p className="text-base max-sm:text-sm">
          Don’t have an account?{" "}
          <Link to={"/RegisterPage"} className="underline text-pinkq">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Loginpage;

// import * as React from 'react';
// import { AppProvider, SignInPage } from '@toolpad/core';
// import { useTheme } from '@mui/material/styles';

// // preview-start
// const providers = [{ id: 'credentials', name: 'Email and Password' }];
// // preview-end

// const signIn = async (provider, formData) => {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       alert(
//         `Signing in with "${provider.name}" and credentials: ${formData.get('email')}, ${formData.get('password')}`,
//       );
//       resolve();
//     }, 300);
//   });
//   return promise;
// };

// export default function CredentialsSignInPage() {
//   const theme = useTheme();
//   return (
//     // preview-start
//     <AppProvider theme={theme}>
//       <SignInPage signIn={signIn} providers={providers}/>
//     </AppProvider>
//     // preview-end
//   );
// }
