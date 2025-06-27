import React, { useState } from 'react';
import { FaTruck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { HiOutlineMail } from 'react-icons/hi';

import ImageBlur from "../assets/gradient.png";
import "./place.css";

export const Contact = () => {
  const fakeEmail = 'john.doe1234@gmail.com';
  const fakePhone = '+1 (555) 123-4567';

  const [formData, setFormData] = useState({
    Name: '',
    EmailTwo: '',
    TextBox: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://backendressor.onrender.com/api/ContactForm', formData);
      alert('Contact successfully sent!');
      setFormData({ Name: '', EmailTwo: '', TextBox: '' });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send contact form.');
    }
  };

  return (
   <section className="relative bg-black text-white w-full min-h-screen flex flex-col lg:flex-row pt-20 px-6 md:px-12 lg:px-24 items-start">
  
 {/* Left Side */}
<div className="flex flex-col relative w-full lg:w-1/2 mb-16 lg:mb-0 space-y-6 items-center lg:items-start text-center lg:text-left">
  <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight tracking-tight relative">
    <span className="inline-flex items-center justify-center lg:justify-start space-x-2">
      <FaTruck className="text-white text-2xl md:text-3xl absolute -left-8 top-1/2 transform -translate-y-1/2 hidden sm:block" />
      <span>We like to hear <span className="hidden md:inline"><br /></span> from you.</span>
    </span>
  </h1>

  <p className="text-sm md:text-base text-gray-300 font-garamond leading-relaxed max-w-sm">
    Email, call or complete the form to learn how Ressor Associates can solve your problems with solutions.
  </p>

  <div className="text-sm md:text-base font-garamond flex flex-col space-y-1">
    <p>{fakeEmail}</p>
    <p>{fakePhone}</p>
  </div>

  <Link
    to="/view"
    className="inline-flex items-center text-sm uppercase font-garamond tracking-wide mt-2 hover:underline"
  >
    VIEW
    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <polyline points="3 17 8 12 13 16 18 9 21 12" />
    </svg>
  </Link>

  <img src={ImageBlur} alt="Gradient" className="image-gradient mt-6 w-full max-w-sm" />
  <div className="layer-blur" />
</div>

  {/* Right Side - Aligned Form */}
  <div className="w-full lg:w-1/2 flex justify-center self-start">
    <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 w-full max-w-md border border-white/20 h-auto z-10">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <div className="flex items-center space-x-2 mb-2">
  <HiOutlineMail className="text-2xl text-gray-300" />
  <h1 className="text-3xl text-gray-300 font-garamond font-semibold">Get in touch</h1>
</div>
        </div>

        <input
          name="Name"
          type="text"
          required
          value={formData.Name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full p-3 font-garamond rounded-md border border-gray-300 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-white/50 text-sm"
        />

        <input
          name="EmailTwo"
          type="email"
          required
          value={formData.EmailTwo}
          onChange={handleChange}
          placeholder="Your email"
          className="w-full p-3 font-garamond rounded-md border border-gray-300 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-white/50 text-sm"
        />

        <textarea
          name="TextBox"
          required
          value={formData.TextBox}
          onChange={handleChange}
          placeholder="Your message"
          rows={5}
          className="w-full p-3 font-garamond rounded-md border border-gray-300 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-white/50 text-sm"
        />

        <button
          type="submit"
          className="w-full bg-[#1a1a1a] font-garamond text-gray-300 py-2 px-4 rounded-md shadow-md hover:bg-[#333333] transition-all duration-300 font-semibold text-base flex items-center justify-center"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</section>

  );
};
