import React from 'react';
import bg from '../assets/contactframe.jpg';
import { FaTruck } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';



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
      const response = await axios.post('http://localhost:5010/api/ContactForm', formData);
      alert('Contact successfully sent!');
      setFormData({ Name: '', EmailTwo: '', TextBox: '' }); // reset form
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send contact form.');
    }
  };

  return (
    <section
      className="relative w-full min-h-screen flex flex-col lg:flex-row pt-16 justify-between items-center bg-cover bg-center px-4 md:px-10 lg:px-20"
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundPosition: 'center 20px',
      }}
    >
      {/* Left side: contact info */}
      <div
        className="flex flex-col text-white mb-10 lg:mb-72 w-full lg:w-1/2"
        style={{ fontFamily: 'Garamond, serif' }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-2 flex relative flex-col items-start">
          <span className="inline-flex items-start mt-6">
            <FaTruck className="text-white top-2 absolute text-2xl md:text-3xl" />
          </span>
          <span>We like to hear from you.</span>
        </h1>

        <p className="text-sm mb-2 max-w-md">
          Email, call or complete the form to learn how Ressor Associates can solve your problems with solutions.
        </p>

        <div className="flex flex-wrap gap-4 text-xs md:text-sm">
          <p>{fakeEmail}</p>
          <p>{fakePhone}</p>
        </div>
      </div>

      {/* Right side container */}
      <div className="relative w-full lg:w-1/2 max-w-lg h-full flex justify-center lg:justify-end">
        <form onSubmit={handleSubmit} className="relative flex flex-col w-full max-w-sm text-white">
      <h1 className="text-4xl mb-2">Get in touch</h1>
      <h2 className="text-sm mb-6">You can reach us anytime.</h2>

      <input
        name="Name"
        type="text"
        required
        value={formData.Name}
        onChange={handleChange}
        placeholder="Your name"
        className="mb-4 p-2 rounded bg-opacity-20 text-white placeholder-white w-full"
        style={{ backgroundColor: '#2C2A28' }}
      />

      <input
  name="EmailTwo"
  type="email"
  required
  value={formData.EmailTwo}
  onChange={handleChange}
  placeholder="Your email"
  className="mb-4 p-2 rounded bg-opacity-20 text-white placeholder-white w-full"
  style={{ backgroundColor: '#2C2A28' }}
/>

<textarea
  name="TextBox"
  required
  value={formData.TextBox}
  onChange={handleChange}
  placeholder="Your message"
  className="mb-4 p-2 rounded bg-opacity-20 text-white placeholder-white w-full"
  rows={5}
  style={{ backgroundColor: '#2C2A28' }}
/>

<button
  type="submit"
  className="p-2 bg-white text-black rounded hover:bg-gray-200 transition"
>
  Submit
</button>
    </form>
      </div>
    </section>
  );
};




