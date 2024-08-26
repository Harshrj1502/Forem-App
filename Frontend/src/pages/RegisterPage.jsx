import { useState, React, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import axios from "axios";
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
    e.preventDefault()
     axios
       .post("http://localhost:5170/RegisterPage",{username,email,password})
       .then((response) => setData(response.data))
       .catch((error) => console.error(error));
  };
  return (
    <div className="h-screen">
      <Navbar />
      <section className="flex flex-col items-center bg-primary gap-5  p-28">
        <h1 className="text-5xl text-grey">Registration</h1>
        <form
          className="flex flex-col gap-5 justify-center my-8 "
          onSubmit={handlesubmit}
        >
          <input
            type="text"
            placeholder="username"
            value={username}
            name="username"
            required
            onChange={(e) => setUsername(e.target.value)}
            className="bg-secondary text-grey py-2 rounded-md w-[40vw] outline-none placeholder:text-sm px-4"
          />
          <input
            className="bg-secondary text-grey py-2 rounded-md w-[40vw] outline-none placeholder:text-sm px-4"
            type="text"
            placeholder="Email address"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <span className="flex gap-2">
            <input type="checkbox" required/>
            <label  className="text-white text-sm">
              I accept the terms and policy
            </label>
          </span>
          <button className="bg-pink text-white p-2 rounded-md w-[40vw] hover:opacity-[0.8] font-light text-sm">
            Register
          </button>
        </form>

        <span className="text-sm flex flex-col">
          <Link
            to={"/Loginpage"}
            className="cursor-pointer text-white opacity-[0.8] hover:opacity-100"
          >
            Already have an account?{" "}
          </Link>
          <Link className="cursor-pointer text-white opacity-[0.8] hover:opacity-100">
            Didn't receieve confirmation istructions?
          </Link>
        </span>
      </section>
      <Footer />
    </div>
  );
};

export default RegisterPage;
