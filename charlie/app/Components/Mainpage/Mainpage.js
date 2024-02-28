import Image from 'next/image';
import React from 'react'
import './Mainpage.css'
import Hairstyle from "../../../assests/image/Hairstyle.jpg"
import Beardtrim from "../../../assests/image/Beardtrim.jpg"
import Hotshave from "../../../assests/image/Hotshave.jpg"
import Hairshampoo from "../../../assests/image/Hairshampoo.jpg"
import about from "../../../assests/image/about.jpg"
import { FaCalendarDays } from "react-icons/fa6";
import barber from "../../../assests/image/barber.jpg"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import G1 from "../../../assests/image/G1.jpg"
import G2 from "../../../assests/image/G2.jpg"
import G3 from "../../../assests/image/G3.jpeg"
import G4 from "../../../assests/image/G4.jpg"
import G5 from "../../../assests/image/G5.jpg"
import G6 from "../../../assests/image/G6.jpg"
import G7 from "../../../assests/image/G7.jpg"
import G8 from "../../../assests/image/G8.jpg"
import Home from "../../../assests/image/Home.jpg"


export const Mainpage = () => {
  return (
    <div>
      <div className='mainpage'>
        <div className='homeimage '>
          <Image
            src={Home}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='maintext text-white'>
          <h5 className='font-heading text-center'>WELCOME TO CHARLIE</h5>
          <h1 className='maintext-heading'>WE WILL MAKE <span style={{
            WebkitTextStroke: "2px white",
            color: "transparent"
          }}>YOUR STYLE</span> OF YOUR DREAMS</h1>
          <p className='px-16 py-3'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          <button className='mx-16 px-8 py-3 border rounded-lg border-white'>LEARN MORE ABOUT US</button>
        </div>
      </div>
      <div className='cards d-flex justify-between text-center bg-black '>
        <div className='card w-1/4  bg-black text-white p-2'>
          <div className='card-image flex justify-center h-2/4'>
            <Image src={Hairstyle} className='rounded-full w-3/4 h-3/4 ' />
          </div>
          <div className='card-content'>
            <h4>HAIR STYLES</h4>
            <p>A hair style refers to the way in which one's hair is arranged, shaped, or cut, often reflecting personal preference or current fashion trends.</p>
          </div>
        </div>
        <div className='card w-1/4  bg-black text-white p-2'>
          <div className='card-image flex justify-center h-2/4'>
            <Image src={Beardtrim} className='rounded-full w-3/4 h-3/4' />
          </div>
          <div className='card-content'>
            <h4>BEARD TRIM</h4>
            <p>A bread trim is a haircut style characterized by short, neat, and closely cropped hair around the sides and back of the head, typically leaving more length and volume on top. </p>
          </div>
        </div>
        <div className='card w-1/4  bg-black text-white p-2'>
          <div className='card-image flex justify-center h-2/4'>
            <Image src={Hotshave} className='rounded-full w-3/4 h-3/4 ' />
          </div>
          <div className='card-content'>
            <h4>HOT SHAVE</h4>
            <p>
              A hot shave, also known as a hot towel shave or traditional wet shave, is a luxurious grooming experience where a professional barber uses hot towels, shaving cream, and a straight razor to carefully remove facial hair.</p>
          </div>
        </div>
        <div className='card w-1/4  bg-black text-white p-2'>
          <div className='card-image flex justify-center h-2/4'>
            <Image src={Hairshampoo} className='rounded-full w-3/4 h-3/4' />
          </div>
          <div className='card-content'>
            <h4>HAIR SHAMPOO</h4>
            <p>Hair shampoo is a cleansing product used to remove dirt, oil, and other impurities from the scalp and hair strands.</p>
          </div>
        </div>
      </div>
      <div className='about d-flex pl-32'>
        <div className='aboutleft'>
          <Image src={about} />
        </div>
        <div className='aboutright p-16'>
          <p className='font-black text-gray-600'>ABOUT BARBER</p>
          <h1 className='font-black pt-2'>A SMOOTH BARBER EXPERIENCE IN YOUR TOWN</h1>
          <p className='pt-4 pb-8'>A barber is a professional skilled in the art of cutting, styling, and grooming hair, particularly men's hair. Barbers often provide a range of services including haircuts, beard trims, hot shaves, and hair styling. Traditionally, barbershops have been social hubs where men gather not only for grooming but also for conversation and camaraderie. While the profession has evolved over time, barbers continue to play a vital role in helping individuals look and feel their best through their expertise in hair care and grooming techniques.</p>
          <div className='calander d-flex px-8 p-4 gap-8 font-black bg-black w-2/3 h-28 text-white'>
            <FaCalendarDays size={50} className='bg-white text-black rounded-full p-2' />
            <p>10 <br /> YEAR OF <br />EXPERIENCE</p>
          </div>
        </div>
      </div>
      <div className='Team  bg-black text-white p-16'>
        <div className='text-center'>
          <p className='text-gray-600 font-black'>TEAM</p>
          <h3 className='font-black'>OUR EXPERT <span className='text-gray-600'>TEAM</span></h3>
          <span className='Team-Img d-flex  pt-16 gap-2 flex justify-center'>
            <Image src={barber} className='w-40 h-48' />
            <Image src={barber} className='w-40 h-48' />
            <Image src={barber} className='w-40 h-48' />
            <Image src={barber} className='w-40 h-48' />
          </span>
        </div>
        <div className='select-person p-16 d-flex'>
          <span className='w-1/3'>
            <Image src={barber} className='w-full h-3/4' />
          </span>
          <span className='w-2/4 px-8 py-4'>
            <h2 className='font-black'>Ahsan Khan</h2>
            <p className='text-wrap'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className='d-flex gap-4 pb-2'>
              <span className=' bg-slate-500 rounded-full p-2'><FaFacebookF /></span>
              <span className=' bg-slate-500 rounded-full p-2'><FaInstagram /></span>
              <span className=' bg-slate-500 rounded-full p-2'><FaTwitter /></span>
              <span className=' bg-slate-500 rounded-full p-2'><FaPhoneAlt /></span>
            </p>
            <button className='pt-2 px-4 py-2 border rounded-sm border-slate-500 '>MAKE SCHEDULE</button>
          </span>
          <span className='service w-1/3 px-4 py-4'>
            <h5 className='font-black pb-3'>LIST OF SERVICES</h5>
            <li>Hair Cut</li>
            <li>Beart Trim</li>
            <li>Hair Shampoo</li>
            <li>Clipper Cut</li>
            <li>Hair Style</li>
            <li>face Shave</li>
            <li>Moustache Trim</li>
          </span>
        </div>
      </div>
      <div className='Galary pt-16'>
        <span className='text-center'>
          <p className='text-gray-600 font-black'>Galary</p>
          <h2 className='font-black'>PHOTOS OF YOUR EVENTS</h2>
        </span>
        <span className='Event-Img d-flex pt-16 '>
          <Image src={G1} className='w-1/4 h-1/4' />
          <Image src={G2} className='w-1/4 h-1/4' />
          <Image src={G3} className='w-1/4 h-1/4' />
          <Image src={G4} className='w-1/4 h-1/4' />
        </span>
        <span className='Event-Img d-flex'>
          <Image src={G5} className='w-1/4 h-1/4' />
          <Image src={G6} className='w-1/4 h-1/4' />
          <Image src={G7} className='w-1/4 h-1/4' />
          <Image src={G8} className='w-1/4 h-1/4' />
        </span>
      </div>
      <div className='Pricing p-16'>
        <span className='text-center'>
          <p className='text-gray-600 font-black'>Pricing</p>
          <h2 className='font-black'>PRICE & PLANS</h2>
        </span>
        <div className='Event-Img d-flex pt-16 gap-4 px-8 '>
          <div className='card border-0'>
            <Image src={G1} />
            <span className='p-4'>
              <li>Hair Cut</li>
              <li>Beard Trim</li>
              <li>Moustache Trim</li>
              <li>Clipper Cut</li>
              <li>Face Shave</li>
              <li>Hair Style</li>
              <li>Cleanser</li>
            </span>
            <span className='d-flex gap-16 bg-slate-300 justify-center p-3 font-black'>
              <p>1000</p>
              <button className='bg-slate-500 flex p-2 rounded-lg'>GET STARTED</button>
            </span>
          </div>
          <div className='card border-0'>
            <Image src={G1} />
            <span className='p-4'>
              <li>Hair Cut</li>
              <li>Beard Trim</li>
              <li>Moustache Trim</li>
              <li>Clipper Cut</li>
              <li>Face Shave</li>
              <li>Hair Style</li>
              <li>Cleanser</li>
            </span>
            <span className='d-flex gap-16 bg-slate-300 justify-center p-3 font-black'>
              <p>2000</p>
              <button className='bg-slate-500 p-2 rounded-lg'>GET STARTED</button>
            </span>
          </div>
          <div className='card border-0'>
            <Image src={G1} />
            <span className='p-4'>
              <li>Hair Cut</li>
              <li>Beard Trim</li>
              <li>Moustache Trim</li>
              <li>Clipper Cut</li>
              <li>Face Shave</li>
              <li>Hair Style</li>
              <li>Cleanser</li>
            </span>
            <span className='d-flex gap-8 bg-slate-300 p-3 justify-center font-black'>
              <p>3000</p>
              <button className='aa bg-slate-500 p-2 rounded-lg'>GET STARTED</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Mainpage;
