import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { About } from './components/About';
import { Contact } from './components/Contact';


function App() {
  return (
    <div>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
