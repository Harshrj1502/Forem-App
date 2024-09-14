import { useState, React, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
const RegisterPage = () => {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [verified, setVerified] = useState(false);

  // const handleCaptcha = (value) => {
  //   console.log("Captcha value:", value);
  //   setVerified(true);
  // };
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     if (verified) {
  //         // Process form submission
  //         alert("Form submitted successfully!");
  //     } else {
  //         alert("Please verify that you are a human!");
  //     }
  // };
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5170/RegisterPage", { username, email, password })
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  };
  return (
    <div className="h-screen bg-secondary">
      <span className="bg-secondary h-10 ">
        <h1>LOgo</h1>
      </span>

      <div className="bg-secondary flex flex-col justify-center items-center gap-5 min-h-[calc(100vh-12.5rem)] ">
        <h1 className="text-5xl max-sm:text-3xl max-lg:text-4xl">Hello 👋</h1>
        <section className="flex flex-col p-10 gap-5 bg-primary items-center rounded-lg">
          <form
            className="flex flex-col gap-5 justify-center items-center rounded-lg"
            onSubmit={handlesubmit}
          >
            <input
              type="text"
              placeholder="username"
              value={username}
              name="username"
              required
              onChange={(e) => setUsername(e.target.value)}
              className="bg-secondary hover:bg-primary rounded-md w-[25vw] max-sm:w-[70vw] max-lg:w-[45vw] py-4 px-4 hover:border-2 outline-none border-2 border-secondary"
            />
            <input
              className="bg-secondary hover:bg-primary rounded-md w-[25vw] max-sm:w-[70vw] max-lg:w-[45vw] py-4 px-4 hover:border-2 outline-none border-2 border-secondary"
              type="text"
              placeholder="Email "
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-secondary hover:bg-primary rounded-md w-[25vw] max-sm:w-[70vw] max-lg:w-[45vw] py-4 px-4 hover:border-2 outline-none border-2 border-secondary"
              type="password"
              placeholder="Password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* <input
            className="bg-secondary text-grey py-2 rounded-md w-[40vw] outline-none placeholder:text-sm px-4"
            type="text"
            placeholder="Password Confirmation"
            id="user"
          /> */}
            {/* <ReCAPTCHA
                sitekey="YOUR_SITE_KEY"
                onChange={handleCaptcha}
            /> */}
            {/* <span className="flex gap-2">
            <input type="checkbox" required/>
            <label  className="text-white text-sm">
              I accept the terms and policy
            </label>
          </span> */}
            <Button text={"SignUp"} style={"loginpage"} />
            {/* <button className="bg-pink text-white p-2 rounded-md w-[40vw] hover:opacity-[0.8] font-light text-sm">
            Register
          </button> */}
          </form>

          {/* <span className="text-sm flex flex-col">
          <Link
            to={"/Loginpage"}
            className="cursor-pointer text-white opacity-[0.8] hover:opacity-100"
          >
            Already have an account?{" "}
          </Link>
          <Link className="cursor-pointer text-white opacity-[0.8] hover:opacity-100">
            Didn't receieve confirmation istructions?
          </Link>
        </span> */}
        </section>
      </div>
      <div className="text-center flex flex-col h-40 gap-5">
        <p className="text-sm max-sm:text-xs">
          By clicking "Sign In with Google", you agree to Terms of Service and
          Privacy Policy
        </p>
        <p className="text-base max-sm:text-sm">
          Already have an account?{" "}
          <Link to={"/Loginpage"} className="underline text-blue">
            {" "}
            Login In{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
