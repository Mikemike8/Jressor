import React from 'react';
import point from "../assets/Framee.jpg";
import './service.css'; 
import  thor  from '../assets/reetruckvid.mp4';
const Hero = () => {
  return (
      
<div className="relative w-full h-screen overflow-hidden bg-black">
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover "
    src={thor}
    autoPlay
    muted
    loop
  />
  

    {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60 z-0"></div>

  {/* Centered Text Content */}
  <div className="relative z-10 flex font-ebgaramond flex-col justify-center items-center h-full px-6 max-w-4xl mx-auto text-center">
    <h1 className="text-white font-serif text-5xl md:text-6xl  drop-shadow-lg">
          Get Paid What You're Owed
    </h1>
    <p className="mt-4 text-gray-300 font-ebgaramond text-xl md:text-2xl max-w-3xl leading-relaxed drop-shadow-lg">
      Reesor & Associates helps trucking companies recover unpaid invoices fast—so you can protect your cash flow and stay focused on the road.
  </p>
    <a
  href="#"
  className="inline-block mt-4 px-6 py-3 border border-white rounded-full text-white font-ebgaramond 
             hover:bg-white/20 hover:backdrop-blur-sm hover:text-white transition"
>
Start Collecting Now
</a>
  </div>
</div>


  );
};

export default Hero;
