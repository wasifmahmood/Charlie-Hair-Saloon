"use client";
import React from "react";
import "./ContactForm.css";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiMapAlt } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";

const ContactForm = () => {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <div className="contact-form d-flex p-16">
        <div className=" icons w-1/5 p-24 flex-col flex justify-evenly">
          <li className="hover:bg-orange-600 h-12 w-12 rounded-lg p-2 list-none">
            <FaFacebook size={30} />
          </li>
          <li className="hover:bg-orange-600 h-12 w-12 rounded-lg p-2 list-none">
            <CiInstagram size={30} />
          </li>
          <li className="hover:bg-orange-600 h-12 w-12 rounded-lg p-2 list-none">
            <FaLinkedinIn size={30} />
          </li>
        </div>
        <div className="form  w-2/4">
          <h1 className="pb-4 text-center font-black">Send Message</h1>
          <label
            className="leading-[27px] text-[16px] font-bold"
            htmlFor="fullname"
          >
            Name
            <span className=" text-orange-900leading-[23px] text-[13px] font-light">
              (required)
            </span>
          </label>
          <div className="flex p-2">
            <input
              id="fullname"
              type="text"
              placeholder="first"
              value={fname}
              onChange={(e) => setfName(e.target.value)}
              className="outline-none w-1/2 bg-transparent p-2 border1 mr-3"
            />
            <input
              id="fullname"
              type="text"
              placeholder="last"
              value={lname}
              onChange={(e) => setlName(e.target.value)}
              className="outline-none w-1/2 bg-transparent p-2 border1"
            />
          </div>

          <label className=" text-[16px] font-bold " htmlFor="email">
            Email
            <span className="text-orange-900  text-[13px] font-light">
              (required)
            </span>
          </label>
          <br />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none w-full bg-transparent p-2 border1 "
          />
          <label className=" text-[16px] font-bold " htmlFor="phone">
            Phone
          </label>
          <div>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="outline-none w-full bg-transparent p-2 border1"
            />
          </div>
          <label className="text-[16px] font-bold" htmlFor="C-or-Q">
            Comments or Questions
          </label>
          <br />
          <input
            id="C-or-Q"
            type="text"
            className="outline-none w-full bg-transparent p-2 border1"
          />
          <br />
          <button className="bg-red-600 text-white  mt-6 p-2 hover:bg-slate-300">
            Submit
          </button>
        </div>
        <div className="address p-16 w-1/3">
          <div className="flex gap-3 font-style">
            <span>
              <TfiMapAlt size={30} />
            </span>
            <h3 className="font-bold  font-style">Corporate Office</h3>
          </div>

          <div className="pl-10 pt-4">
            <p>1846 Craig Park Ct.</p>
            <p>St. Louis, MO 63146</p>
          </div>
          <div className="flex gap-3 pt-4">
            <FaPhoneAlt size={30} />
            <h2 className="font-normal font-style">314-576-7300</h2>
          </div>
          <div className="flex gap-3 pt-3">
            <FaCalendarAlt size={30} />
            <h2 className="font-normal font-style">314-576-7310</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
