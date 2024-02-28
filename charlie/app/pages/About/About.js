import React from "react";
import "./About.css";
import { FaCalendarDays } from "react-icons/fa6";



const About = () => {
  return (
    <div className="about img-bg p-16">
      <p className="font-black text-white">ABOUT BARBER</p>
      <h1 className="text-white pt-2 w-1/2">
        A SMOOTH BARBER EXPERIENCE IN YOUR TOWN
      </h1>
      <p className="pt-4 pb-8 w-1/2 tracking-wide text-white">
        A barber is a professional skilled in the art of cutting, styling, and
        grooming hair, particularly men's hair. Barbers often provide a range of
        services including haircuts, beard trims, hot shaves, and hair styling.
        Traditionally, barbershops have been social hubs where men gather not
        only for grooming but also for conversation and camaraderie. While the
        profession has evolved over time, barbers continue to play a vital role
        in helping individuals look and feel their best through their expertise
        in hair care and grooming techniques.
      </p>
      <div className="calander d-flex p-3 gap-8 font-black bg-transparent h-28 w-72 rounded-xl text-white">
        <FaCalendarDays
          size={50}
          className="bg-white text-black rounded-xl p-2"
        />
        <p>
          <span className="text-2xl">10</span><br />YEAR OF<br />
          EXPERIENCE
        </p>
      </div>
    </div>
  );
};

export default About;
