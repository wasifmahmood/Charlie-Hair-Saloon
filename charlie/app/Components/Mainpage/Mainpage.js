import Image from 'next/image';
import React from 'react'
import './Mainpage.css'
import Hairstyle from "../../../assests/image/Hairstyle.jpg"
import Beardtrim from "../../../assests/image/Beardtrim.jpg"
import Hotshave from "../../../assests/image/Hotshave.jpg"
import Hairshampoo from "../../../assests/image/Hairshampoo.jpg"

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
      <div className='d-flex justify-between text-center bg-black'>
        <div className='card w-1/4  bg-black text-white'>
          <Image src={Hairstyle} className='rounded-full w-1/2 h-1/2 justify-center' />
          <h4>HAIR STYLES</h4>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
        </div>
        <div className='card w-1/4  bg-black text-white'>
          <Image src={Beardtrim} className='rounded-full w-1/2 h-1/2 ' />
          <h4>BEARD TRIM</h4>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
        </div>
        <div className='card w-1/4  bg-black text-white'>
          <Image src={Hotshave} className='rounded-full w-1/2 h-1/2' />
          <h4>HOT SHAVE</h4>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
        </div>
        <div className='card w-1/4  bg-black text-white'>
          <Image src={Hairshampoo} className='rounded-full w-1/2 h-1/2' />
          <h4>HAIR SHAMPOO</h4>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
        </div>
      </div>
    </div>
  )
}
export default Mainpage;
