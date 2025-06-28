import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Nav } from './components/Nav';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import Place from './pages/Place';
import { View } from './pages/View';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';
import { Chat } from './pages/Chat';



function App() {
  const location = useLocation();

  const isPlacePage = location.pathname === '/place';
  const isContactPage = location.pathname === '/contact';

  return (
    <div className={`${isPlacePage ? 'place-page' : ''} ${isContactPage ? 'contact-page' : ''}`}>
   <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/place" element={<Place />} />
            <Route path="/view" element={<View />} />



      </Routes>
      <Chat/>
      <Footer/>
    </div>
  );
}

export default App;
