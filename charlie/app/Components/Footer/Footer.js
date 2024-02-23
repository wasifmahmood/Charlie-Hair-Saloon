import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { TiSocialTwitter } from "react-icons/ti";
import { MdNavigateNext } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div className='footer d-flex  p-24 gap-16 bg-zinc-950 text-white  justify-content-start'>
                <div className='charlie w-1/4'>
                    <h5 className='font-bold'>CHARLIE</h5>
                    <p className='pt-4'>Far far away, behind the word mountains, far from the countries.</p>
                    <div className='d-flex p-2 gap-4 '>
                        <span className=' bg-slate-500 rounded-full p-2'><FaFacebookF /></span>
                        <span className=' bg-slate-500 rounded-full p-2'><FaInstagram /></span>
                        <span className=' bg-slate-500 rounded-full p-2'><TiSocialTwitter /></span>
                    </div>
                </div>
                <div className='explore w-1/4'>
                    <h5 className='font-bold'>EXPLORE</h5>
                    <p className='d-flex pt-4 '><MdNavigateNext size={25} />About</p>
                    <p className='d-flex'><MdNavigateNext size={25} />Gallery</p>
                    <p className='d-flex'><MdNavigateNext size={25} />Blog</p>
                    <p className='d-flex'><MdNavigateNext size={25} />Services</p>
                </div>
                <div className='info w-1/4'>
                    <h5 className='font-bold'>INFO</h5>
                    <p className='d-flex pt-4'><MdNavigateNext size={25} />Join us</p>
                    <p className='d-flex'><MdNavigateNext size={25} />Make Appointment</p>
                    <p className='d-flex'><MdNavigateNext size={25} />Privacy & Policy</p>
                    <p className='d-flex'><MdNavigateNext size={25} />Term & Conditions</p>
                </div>
                <div className='question w-1/4'>
                    <h5 className='font-bold'>HAVE A QUESTIONS?</h5>
                    <p className='d-flex gap-3 pt-4'><FaMap size={40} />203 Fake St. Mountain View, San Francisco, California, USA</p>
                    <p className='d-flex gap-3'><MdLocalPhone size={25} />+2 392 3929 210</p>
                    <p className='d-flex gap-3'><FaLocationArrow size={25} />info@yourdomain.com</p>
                </div>
            </div>
            <div className='ss bg-black text-white p-4 px-16 text-center  '>
                <p>Copyright ©2024 All rights reserved | This template is made with  by Charlie</p>
            </div>
        </div>
    )
}

export default Footer