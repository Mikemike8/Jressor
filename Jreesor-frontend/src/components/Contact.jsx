import React from 'react';
import bg from '../assets/Contact.svg'; // Or use the data URI directly

export const Contact = () => {
  return (
    <section
      className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{
        backgroundImage: `url("${bg}")`,
      }}
    >
      <h1 className="text-white text-4xl">Contact</h1>
    </section>
  );
};
