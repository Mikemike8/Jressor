import React from 'react';
import Fam from '../assets/family-6787470_1280.jpg';
import './service.css';

export const Who = () => {
  return (
 <section
  loading="lazy"
  className="relative py-32 px-4 bg-cover bg-center bg-no-repeat max-w-full mx-auto text-center section-2"
  style={{ backgroundImage: `url(${Fam})` }}
>
  {/* Dark overlay only behind */}
  <div className="absolute inset-0 bg-black/60 z-0"></div>

  {/* Text content with solid white color */}
  <div className="relative z-10 text-white">
    <h2 className="text-5xl font-ebgaramond mb-4">Who We Are</h2>
    <p className="font-ebgaramond max-w-md mx-auto text-lg mb-4">
      At Reesor's, we specialize in debt collection for trucking companies.
      Our mission is to ensure your business stays financially healthy by providing
      customized recovery solutions.
    </p>
    <a
      href="/about"
      className="inline-block mt-4 px-6 py-3 border border-white rounded-full font-ebgaramond 
                 hover:bg-white/20 hover:backdrop-blur-sm hover:text-white transition"
    >
      Learn More About Services
    </a>
  </div>
</section>

  );
};
