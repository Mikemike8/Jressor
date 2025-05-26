import React from 'react';
import point from "../assets/REESORGPXt.svg";

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
        className="absolute bottom-22 left-12 px-4 py-2 bg-[#A19A8A] text-white font-bold rounded shadow-md hover:bg-[#8d8679] transition-colors duration-300"
      >
        LEARN MORE
      </button>
    </section>
  );
};

export default Hero;
