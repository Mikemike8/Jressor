import React from 'react'
import './service.css'; 

export const Who = () => {
  return (
    <>
    <section  loading="lazy"  className="py-32 px-4 max-w-full mx-auto text-center  section-2 "  >
        <span
  className="absolute bottom-0 left-0 w-full h-20"

></span>
  <h2 className="text-5xl font-serif text-black mb-4">Who We Are</h2>
  <p className="text-black/70 font-sans text-lg mb-4">
    At Reesor's, we specialize in debt collection for trucking companies.
    Our mission is to ensure your business stays financially healthy by providing
    customized recovery solutions.
  </p>
  <a
    href="/about"
    className="inline-block mt-4 px-6 py-3 border border-black rounded-full text-black font-sans hover:bg-black hover:text-white transition"
  >
    Learn More About Us
  </a>
</section>
    </>
  )
}
