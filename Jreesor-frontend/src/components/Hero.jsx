import React from 'react';
import point from "../assets/Framee.jpg";
import './service.css'; 
const Hero = () => {
  return (
    <section
      className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${point})`,
      }}
    >
      {/* Button */}
      <button
        className="absolute bottom-16 left-12 px-4 py-2 text-white font-bold rounded hover:text-gray-400 cursor transition-colors duration-300"
      >
        LEARN MORE
      </button>
    </section>
  );
};

export default Hero;
