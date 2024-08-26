import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SideNavbar from "../components/SideNavbar";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <section className="flex bg-primary py-10">
        <SideNavbar />
        <div className="px-32">
          <div className="flex flex-col gap-2 text-blue text-base">
          <h1 className="text-5xl text-grey">Contact US</h1>
            Feature suggestion? Question on why something is? Want to say hello?
            Feel free to fill out the contact form and we will get back to you
            as quickly as we can!
          </div>
          {/* onSubmit={handlesubmit} */}
          <form className="flex flex-col gap-2 justify-center my-8 ">
            <h1 className="text-white">Username*</h1>
            <input
              type="text"
              className="bg-secondary text-grey py-2 rounded-md w-[40vw] outline-none placeholder:text-sm px-4"
            />
            <h1 className="text-white">Email*</h1>
            <input
              type="text"
              className="bg-secondary text-grey py-2 rounded-md w-[40vw] outline-none placeholder:text-sm px-4"
            />
            <h1 className="text-white">Feedback*</h1>
            <textarea
              name="feedback"
              className="bg-secondary text-grey py-2 rounded-md w-[40vw] outline-none placeholder:text-sm px-4"
              rows={5}
            />
            <button className="bg-pink text-white p-2 rounded-md w-[10vw] hover:opacity-[0.8] font-light text-sm">
              Send
            </button>
            <h1 className="text-white">*Fields are required</h1>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default ContactPage;
