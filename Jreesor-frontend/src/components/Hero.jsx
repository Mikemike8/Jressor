import React from 'react';
import './service.css'; 
import thor from '../assets/reetruckvid.mp4';

import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={thor}
        autoPlay
        muted
        loop
        playsInline // ensures autoplay on mobile
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Centered Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-white font-serif text-4xl sm:text-5xl md:text-6xl drop-shadow-lg">
          Get Paid What You're Owed
        </h1>
        <p className="mt-4 text-gray-300 font-ebgaramond text-base sm:text-xl md:text-2xl max-w-3xl leading-relaxed drop-shadow-lg">
          Reesor & Associates helps trucking companies recover unpaid invoices fast—so you can protect your cash flow and stay focused on the road.
        </p>
        <a
          href="#"
          className="inline-block mt-6 px-6 py-3 border border-white rounded-full text-white font-ebgaramond 
                     hover:bg-white/20 hover:backdrop-blur-sm hover:text-white transition"
        >
          <Link to="/place" >Start Collecting Now</Link> 
        </a>
      </div>
    </div>
  );
};

export default Hero;
