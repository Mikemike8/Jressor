import React from 'react'

import truck from "../assets/pexels-august-de-richelieu-4427430.jpg"

const Hero = () => {
  return (
    <>
   <section
  className="relative w-full h-screen flex flex-col justify-center items-center text-center"
  style={{
    backgroundImage: {truck},
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div> {/* subtle overlay */}
  
  <div className="relative z-10 max-w-2xl px-4">
    <h1 className="text-4xl sm:text-5xl font-serif text-black tracking-widest">
      Debt Collection for Trucking
    </h1>
    <p className="mt-4 text-lg font-sans text-black/70">
      Specialized solutions to keep your fleet moving and your finances healthy.
    </p>
    <button className="mt-6 px-6 py-3 border border-black rounded-full text-black font-sans hover:bg-black hover:text-white transition">
      Request a Consultation
    </button>
  </div>
</section>

    </>
  )
}

export default Hero