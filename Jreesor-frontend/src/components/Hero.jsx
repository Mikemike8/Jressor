import React from 'react';
import point from "../assets/REESORGPXt.svg";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage: `url(${point})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <button
    style={{
      position: 'absolute',
      bottom: '15%',
      left: '4%',
      padding: '10px 18px',
      backgroundColor: '#A19A8A', // gray-500-ish
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: 'bold',
      boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
    }}
  >
    LEARN MORE
  </button>
      
     

    </section>
  );
};

export default Hero;
