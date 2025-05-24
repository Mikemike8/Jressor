import React from 'react'

import point from "../assets/pexels-quintingellar-2199293.jpg";

const Hero = () => {
  return (
    <>
      <section
      className="relative w-full h-screen flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage: `url(${point})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(255,255,255,0.5), rgba(236,233,230,0.5))",
        }}
      ></div>

      {/* Subtle darker overlay for better text contrast */}
      <div
        className="absolute inset-0 bg-black/20" // 20% black overlay
      ></div>

      {/* Text content */}
      <div className="relative z-10 max-w-2xl px-4 pt-15">
        <h1
          className="text-4xl sm:text-5xl font-serif  text-white tracking-widest"
          style={{
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)", 
          }}
        >
          Debt Collection for Trucking
        </h1>
        <p
          className="mt-4 text-lg  font-sans text-white/80"
          style={{
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)", 
          }}
        >
          Specialized solutions to keep your fleet moving and your finances healthy.
        </p>
        <button className="mt-6 px-6 py-3 border border-white rounded-full text-white font-sans hover:text-gray-700  transition">
          Request a Consultation
        </button>
      </div>
    </section>

    </>
  )
}

export default Hero