
"use client"
import Image from 'next/image';
import React from 'react'
import './Mainpage.css'
import Hairstyle from "../../../assests/image/Hairstyle.jpg"
import Beardtrim from "../../../assests/image/Beardtrim.jpg"
import Hotshave from "../../../assests/image/Hotshave.jpg"
import Hairshampoo from "../../../assests/image/Hairshampoo.jpg"
import barber1 from "../../../assests/image/barber/barber1.jpg"
import barber2 from "../../../assests/image/barber/barber2.jpg"
import barber3 from "../../../assests/image/barber/barber3.jpg"
import barber4 from "../../../assests/image/barber/barber4.jpg"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import G1 from "../../../assests/image/G1.jpg"
import G2 from "../../../assests/image/G2.jpg"
import G3 from "../../../assests/image/G3.jpg"
import G4 from "../../../assests/image/G4.jpg"
import G5 from "../../../assests/image/G5.jpg"
import G6 from "../../../assests/image/G6.jpg"
import G7 from "../../../assests/image/G7.jpg"
import G8 from "../../../assests/image/G8.jpg"
import Home from "../../../assests/image/Home.jpg"
import { useState } from 'react';


export const Mainpage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedBarber, setSelectedBarber] = useState(null);

  const barbers = [
    {
      imageUrl: barber1,
      name: 'Wasif',
      description: 'A senior barber is a highly skilled grooming expert, proficient in diverse haircutting techniques, beard grooming, and providing personalized client consultations, ensuring exceptional service and satisfaction. They lead by example, mentor junior staff, and maintain a professional, hygienic environment in the barbershop or salon.',
      socialMedia: [<FaFacebookF />, <FaInstagram />, <FaTwitter />, <FaPhoneAlt />],
      phoneNumber: '1234567890',
      services: ['Hair Cut', 'Beard Trim', 'Hair Shampoo', 'Clipper Cut', 'Hair Style', 'Face Shave', 'Moustache Trim']
    },
    {
      imageUrl: barber2,
      name: 'ALi',
      description: 'A junior barber is an entry-level grooming professional, assisting senior staff with basic haircutting, client service, and maintaining hygiene standards while eagerly learning and developing their skills in the industry.',
      socialMedia: [<FaFacebookF />, <FaInstagram />, <FaTwitter />, <FaPhoneAlt />],
      phoneNumber: '1234567890',
      services: ['Hair Cut', 'Beard Trim', 'Hair Shampoo', 'Clipper Cut', 'Hair Style', 'Face Shave', 'Moustache Trim']
    },
    {
      imageUrl: barber3,
      name: 'Usman',
      description: 'A junior barber is an entry-level grooming professional, assisting senior staff with basic haircutting, client service, and maintaining hygiene standards while eagerly learning and developing their skills in the industry.',
      socialMedia: [<FaFacebookF />, <FaInstagram />, <FaTwitter />, <FaPhoneAlt />],
      phoneNumber: '1234567890',
      services: ['Hair Cut', 'Beard Trim', 'Hair Shampoo', 'Clipper Cut', 'Hair Style', 'Face Shave', 'Moustache Trim']
    },
    {
      imageUrl: barber4,
      name: 'Hanan',
      description: 'A trainer barber is an experienced grooming professional who educates and mentors junior barbers, imparting expertise in haircutting, beard styling, and client consultation, fostering skill development and maintaining high standards of professionalism. They provide guidance, feedback, and support to help groomers refine their techniques and excel in their careers.',
      socialMedia: [<FaFacebookF />, <FaInstagram />, <FaTwitter />, <FaPhoneAlt />],
      phoneNumber: '1234567890',
      services: ['Hair Cut', 'Beard Trim', 'Hair Shampoo', 'Clipper Cut', 'Hair Style', 'Face Shave', 'Moustache Trim']
    },
  ];

  const cardsData = [
    {
      title: 'HAIR STYLES',
      image: Hairstyle,
      description: 'A hair style refers to the way in which one\'s hair is arranged, shaped, or cut, often reflecting personal preference or current fashion trends.'
    },
    {
      title: 'BEARD TRIM',
      image: Beardtrim,
      description: 'A beard trim is a haircut style characterized by short, neat, and closely cropped hair around the sides and back of the head, typically leaving more length and volume on top.'
    },
    {
      title: 'HOT SHAVE',
      image: Hotshave,
      description: 'A hot shave, also known as a hot towel shave or traditional wet shave, is a luxurious grooming experience where a professional barber uses hot towels, shaving cream, and a straight razor to carefully remove facial hair.'
    },
    {
      title: 'HAIR SHAMPOO',
      image: Hairshampoo,
      description: 'Hair shampoo is a cleansing product used to remove dirt, oil, and other impurities from the scalp and hair strands.'
    }
  ];

  const pricingData = [
    {
      image: G7,
      services: ['Hair Cut', 'Beard Trim', 'Moustache Trim', 'Clipper Cut', 'Face Shave', 'Hair Style', 'Cleanser'],
      amount: 1000
    },
    {
      image: G6,
      services: ['Hair Cut', 'Beard Trim', 'Moustache Trim', 'Clipper Cut', 'Face Shave', 'Hair Style', 'Cleanser'],
      amount: 2000
    },
    {
      image: G2,
      services: ['Hair Cut', 'Beard Trim', 'Moustache Trim', 'Clipper Cut', 'Face Shave', 'Hair Style', 'Cleanser'],
      amount: 3000
    }
  ];

  const openBarberDetails = (barber) => {
    setSelectedBarber(barber);
  };

  const openPopup = (imageUrl) => {
    setSelectedImage(imageUrl);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setSelectedImage(null);
    setPopupVisible(false);
  };

  return (
    <div>
      <div className='mainpage '>
        <div className='homeimage'>
          <Image
            src={Home}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='maintext text-white'>
          <h5 className='font-heading text-center font-black'>WELCOME TO CHARLIE</h5>
          <h1 className='maintext-heading font-black'>WE WILL MAKE <span style={{
            WebkitTextStroke: "2px white",
            color: "transparent"
          }}>YOUR STYLE</span> OF YOUR DREAMS</h1>
          <p className='px-16 py-3'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          <button className='mx-16 px-8 py-3 border rounded-lg border-white'>LEARN MORE ABOUT US</button>
        </div>
      </div>
      <div className='cards d-flex justify-between text-center bg-black'>
        {cardsData.map((card, index) => (
          <div
            key={index}
            className='card w-1/4 bg-black text-white p-2'
          >
            <div className='card-content flex flex-col h-full relative'>
              <div className='card-image object-cover h-48 w-48 absolute top-0 left-1/2 transform -translate-x-1/2 -mt-20 '>
                <Image
                  src={card.image}
                  className='rounded-full w-full h-full '
                  alt={card.title}
                />
              </div>
              <div className='card-details h-1/2 mt-16 pt-16'>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='Team  bg-black text-white p-16'>
        <div className='text-center'>
          <p className='text-gray-600 font-black'>TEAM</p>
          <h3 className='font-black'>OUR EXPERT <span className='text-slate-500'>TEAM</span></h3>
          <span className='Team-Img d-flex  pt-16 gap-2 flex justify-center'>
            {barbers.map((barber, index) => (
              <Image
                key={index}
                src={barber.imageUrl}
                className='w-40 h-48 cursor-pointer '
                onClick={() => openBarberDetails(barber)}
                alt={`Barber ${index + 1}`}
              />
            ))}
          </span>
        </div>
        {selectedBarber && (
          <div className='select-person p-16 d-flex'>
            <div className='w-1/3 pt-4'>
              <Image src={selectedBarber.imageUrl} className='w-full h-3/4' alt='Selected Barber' />
            </div>
            <span className='barber-detail w-2/4 px-8 py-4'>
              <h2 className='font-black'>{selectedBarber.name}</h2>
              <p className='text-wrap'>{selectedBarber.description}.</p>
              <p className='d-flex gap-4 pb-2'>
                {selectedBarber.socialMedia.map((social, index) => (
                  <span key={index} className=' bg-slate-500 rounded-full p-3'>{social}</span>
                ))}
              </p>
              <button className='pt-2 px-4 py-2 border border-slate-500 '>MAKE SCHEDULE</button>
            </span>
            <span className='service w-1/3 px-4 py-4'>
              <h5 className='font-black pb-3'>LIST OF SERVICES</h5>
              <ul>
                {selectedBarber.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </span>
          </div>
        )}
      </div>
      <div className='Gallery pt-16'>
        <span className='text-center'>
          <p className='text-gray-600 font-black'>Gallery</p>
          <h2 className='font-black'>PHOTOS OF YOUR EVENTS</h2>
        </span>
        <span className='Event-Img d-flex pt-16'>
          {[G1, G2, G3, G4].map((imageUrl, index) => (
            <p className='image-container w-1/4' key={index} onClick={() => openPopup(imageUrl)}>
              <Image src={imageUrl} alt={`Image ${index + 1}`} />
              <h4 className='overlay'><FaSearchPlus /></h4>
            </p>
          ))}
        </span>
        <span className='Event-Img d-flex'>
          {[G5, G6, G7, G8].map((imageUrl, index) => (
            <p className='image-container w-1/4' key={index} onClick={() => openPopup(imageUrl)}>
              <Image src={imageUrl} alt={`Image ${index + 1}`} />
              <h4 className='overlay'><FaSearchPlus /></h4>
            </p>
          ))}
        </span>
        {popupVisible && (
          <div className="popup" onClick={closePopup}>
            <span className="close" onClick={closePopup}>&times;</span>
            <Image src={selectedImage} alt="Popup Image" />
          </div>
        )}
      </div>

      <div className='Pricing p-16'>
        <span className='text-center'>
          <p className='text-gray-600 font-black'>Pricing</p>
          <h2 className='font-black'>PRICE & PLANS</h2>
        </span>
        <div className='card-Img d-flex pt-16 gap-4 px-8'>
          {pricingData.map((price, index) => (
            <div key={index} className='card border-0 bg-white shadow-md p-4'>
              <Image src={price.image} />
              <ul className='p-4'>
                {price.services.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ul>
              <div className='flex justify-between items-center bg-slate-300 p-3 font-black'>
                <p className='text-xl pt-2'>{`RS-${price.amount}/-`}</p>
                <button className='bg-slate-500 text-white p-2 rounded-lg'>GET STARTED</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Mainpage;
