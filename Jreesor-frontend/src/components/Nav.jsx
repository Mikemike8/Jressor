import { useState, useEffect, useCallback, useRef } from "react";
import { FaUser } from "react-icons/fa";
import './service.css'; 

import { Link } from 'react-router-dom';


export const Nav = () => {
const [menuOpen, setMenuOpen] = useState(false);

const [popoverActive, setPopoverActive] = useState(false);
const popoverRef = useRef(null);

// Show popover on hover
const togglePopover = () => {
  setPopoverActive(!popoverActive);
};

  // Navbar hide/show on scroll
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY);
      setPastHero(currentScrollY > window.innerHeight);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full z-50 border-b border-black/10  backdrop-blur-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
       style={{
    background: pastHero ? "#1F1E1C" : "#2C2A28", // Light background for pastHero true, dark background otherwise
    color: pastHero ? "#FFF" : "#FFF", 
    fontFamily: "'Garamond', serif",
  }}
    >
      <div className="max-w-[2000px] mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-12 relative">
          {/* Logo */}
          <div className="flex flex-row items-center text-center" >
            <span className="text-2xl tracking-widest   font-serif"  >
              REESOR{" "}
              <span className="text-xs align-top ml-1 tracking-normal font-sans ">
                ASSOCIATES
              </span>
            </span>
          </div>

{/* Links */}

<ul className={`lg:flex lg:space-x-8 lg:items-center text-white font-semibold text-base ${menuOpen ? 'block' : 'hidden'} absolute lg:static top-full left-0 w-full lg:w-auto bg-[#1F1E1C] lg:bg-transparent z-40 lg:z-auto transition-all duration-300`}>
  <li className="cursor-pointer transition">
    <Link to="/" className="no-underline text-inherit">HOME</Link>
  </li>

  <li className="cursor-pointer transition">
    <Link to="/about" className="no-underline text-inherit">ABOUT</Link>
    
  </li>


  <li className="cursor-pointer transition">
      <Link to="/contact" className="hover:text-gray-300">CONTACT</Link>
   
  </li>
{/* SERVICES Popover */}
<li className="relative" ref={popoverRef}>
  <div
    className="cursor-pointer transition font-semibold text-base flex items-center space-x-1 select-none text-white hover:text-gray-300"
    onClick={() => setPopoverActive(!popoverActive)}
    style={{ backgroundColor: 'transparent' }}  // explicitly no bg on SERVICES button
  >
    <span>SERVICES</span>
    <span className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-white"></span>
  </div>

  {popoverActive && (
    <div
      className="
        absolute left-0 mt-2
        w-40
        rounded-md
        shadow-lg
        ring-1 ring-black ring-opacity-50
        z-50
        overflow-hidden
      "
      style={{ backgroundColor: 'rgba(33, 37, 41, 0.95)' }} // Bootstrap dark dropdown bg
    >
      <ul className="py-1 text-white text-sm">
       <li className="px-4 py-2 hover:bg-gray-600 hover:text-white cursor-pointer transition">
  <Link
    to="/place"
    className="no-underline text-white flex items-center space-x-2"
  >
    <span>PLACE</span>
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
      <path d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z" />
    </svg>
  </Link>
</li>

    <li className="px-4 py-2 hover:bg-gray-600 hover:text-white cursor-pointer transition">
  <Link to="/view" className="no-underline text-white flex items-center">
    VIEW
    <svg
      className="w-6 h-6 ml-2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <polyline points="3 17 8 12 13 16 18 9 21 12" />
    </svg>
  </Link>
</li>


      </ul>
    </div>
  )}
</li>

   

  {/* Moved this li inside the main ul */}
  <li className="cursor-pointer hover:text-gray-700 transition">
    CARRIER VS. GROWING THREAT
  </li>
</ul>

{/* Hamburger menu (mobile only) */}
<div className="lg:hidden">
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-white focus:outline-none"
    aria-label="Toggle menu"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
      />
    </svg>
  </button>
</div>


{/*       
          <button
            aria-label="Contact"
            className="text-white text-xl opacity-80 hover:text-gray-700 transition-opacity duration-200 focus:outline-none"
            type="button"
            style={{ fontWeight: "300" }}
          >
            <Link to="/contact" className="no-underline text-inherit"> <FaUser /> </Link>
          </button> */}
        </div>
      </div>
    </nav>
  );
};
