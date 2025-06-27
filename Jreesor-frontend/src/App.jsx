import React, {  useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Nav } from './components/Nav';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import Place from './pages/Place';
import { View } from './pages/View';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';



function App() {
      useEffect(() => {(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...args)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(args)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="g2FhobLszRRQR3leSt02t";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})()}, []); // runs only once when component mounts
  
  
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
      <Footer/>
    </div>
  );
}

export default App;
