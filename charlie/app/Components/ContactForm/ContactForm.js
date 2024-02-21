import React from "react";
import "./ContactForm.css";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

const ContactForm = () => {
  return (
    <>
      <div className="flex w-full h-full ">
        <div className="flex flex-col pl-40 pt-80 ">
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
        <div className=" ">
          <div className=" p-20  ">
            <h1 className="m-2  pb-4 text-[40px] lending-[56px] font-style font-normal">
              Send Message
            </h1>

            <label
              className="leading-[27px] text-[16px] font-bold"
              htmlFor="fullname"
            >
              Name <span className=' text-orange-900leading-[23px] text-[13px] font-light'> (required)</span>
            </label>
            <div className="flex p-2">
              <input
                id="fullname"
                type="text"
                placeholder="first"
                className="outline-none w-1/2 bg-transparent p-3 border1 mr-3"
              />
              <input
                id="fullname"
                type="text"
                placeholder="last"
                className="outline-none w-1/2 bg-transparent p-3 border1"
              />
            </div>

            <label
              className="leading-[27px] text-[16px] font-bold mt-3"
              htmlFor="email"
            >
              Email <span className= 'text-orange-900 leading-[23px] text-[13px] font-light'> (required)</span>
            </label>
            <br />
              <input
                id="email"
                type="email"
                className="outline-none w-full bg-transparent p-3 border1 "
              />
        
            <label
              className="block p-0 leading-[27px] text-[16px] font-bold mt-3"
              htmlFor="phone"
            >
              phone
            </label>
            <div>
              <input
                id="phone"
                type="text"
                className="outline-none w-full bg-transparent p-3 border1"
              />
            </div>
            <label className="block p-0 leading-[27px] text-[16px] font-bold mt-3" htmlFor="help">
              What can we help you with?{" "}
              <span className=" text-red-600 leading-[23px] text-[13px] font-light">(Required)</span>
            </label>
            <div className="">
              <select
                id="help"
                name="help"
                className="outline-none w-full bg-transparent p-4 border1"
              >
                <option value=" Question about Product and Service">
                  Question about Product and Service
                </option>
                <option value="Feedback on a recent experience in a saloon">
                  Feedback on a recent experience in a saloon
                </option>
                <option value="Sponsorships and Donations">
                  Sponsorships and Donations
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
            <label className="pb-4  mt-3 pt-3 leading-[27px] text-[16px] font-bold" htmlFor="C-or-Q">
              Comments or Questions
            </label>
            <br />
            <input
              id="C-or-Q"
              type="text"
              className="outline-none w-full bg-transparent mb-2 p-4 border1"
            />
            <br />
            <button className="bg-red-600 text-white  mt-4 p-2 hover:bg-slate-300">
              Submit
            </button>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
};

export default ContactForm;
