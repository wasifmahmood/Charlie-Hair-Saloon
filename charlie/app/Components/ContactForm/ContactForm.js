import React from "react";
import "./ContactForm.css";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

const ContactForm = () => {
  return (
    <>
      <div className="flex w-full h-full ">
        <div className="flex flex-col pl-40 pt-80 bg-slate-400 ">
          <div className="space-y-7 ">
            <p className="hover:bg-orange-600 h-[40px] w-[40px] flex items-center justify-center rounded-md">
              {" "}
              <FaFacebook />
            </p>
            <p className="hover:bg-orange-600 h-[40px] w-[40px] flex items-center justify-center rounded-md">
              {" "}
              <CiInstagram />{" "}
            </p>
            <p className="hover:bg-orange-600 h-[40px] w-[40px] flex items-center justify-center rounded-md">
              {" "}
              <FaLinkedinIn />{" "}
            </p>
          </div>
        </div>
        <div className=" bg-slate-200">
          <div className=" p-20  ">
            <h1 className="m-2 text-[40px] lending-[56px] font-style font-normal">
              Send Message
            </h1>

            <label htmlFor="fullname">
              Name <span className="text-orange-500"> (required)</span>
            </label>
            <div className="flex p-2">
              <input
                id="fullname"
                type="text"
                placeholder="first"
                className="outline-none w-full bg-transparent "
              />
              <input
                id="fullname"
                type="text"
                placeholder="last"
                className="outline-none w-full bg-transparent"
              />
            </div>

            <label htmlFor="email">
              Email<span className="text-orange-500"> (required)</span>
            </label>
          <div className='flex p-2'>
            <input
              id="email"
              type="text"
              placeholder="first"
              className="outline-none w-full bg-transparent "
            />
 </div>
                <label htmlFor="Phone">
              phone
            </label>

            <input
              id="email"
              type="text"
              placeholder="first"
              className="outline-none w-full bg-transparent "
            />
         
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
