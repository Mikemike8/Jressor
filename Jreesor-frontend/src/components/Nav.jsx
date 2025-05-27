import { useState, useEffect, useCallback, useRef } from "react";
import { FaUser } from "react-icons/fa";
import './service.css'; 

import { Link } from 'react-router-dom';

export const Nav = () => {
const [popoverActive, setPopoverActive] = useState(false);
const popoverRef = useRef(null);

// Show popover on hover
const handleMouseEnter = () => {
  setPopoverActive(true);
};

// Hide popover on mouse leave
const handleMouseLeave = () => {
  setPopoverActive(false);
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
    background: pastHero ? "#A19A8A" : "#2C2A28", // Light background for pastHero true, dark background otherwise
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
          <ul className="flex space-x-8 text-white font-semibold text-base relative" >

<li className="cursor-pointer transition">
  <Link to="/" className="no-underline text-inherit">HOME</Link>
</li>
          
<li className="cursor-pointer transition">
  <Link to="/about" className="no-underline text-inherit">About</Link>
</li>
            {/* Popover */}
          <li
  className="relative"
  ref={popoverRef}
  onMouseEnter={() => setPopoverActive(true)}
  onMouseLeave={() => setPopoverActive(false)}
>
  <div
    className="cursor-pointer  transition  font-semibold text-base flex items-center space-x-1" 
  >
    <span>SERVICES</span>
    <span className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-white"></span>
  </div>

  {popoverActive && (
    <div className="absolute left-0 mt-8 w-32 bg-black/50 rounded shadow-lg z-50">
      <ul className="py-1 text-white">
        <li className="px-4 py-2 hover:text-gray-300 hover:bg-black/50 cursor-pointer">
          PLACE dbt.
        </li>
        <li className="px-4 py-2 hover:text-gray-300 hover:bg-black/50 cursor-pointer">
          VIEW dbt.
        </li>
      </ul>
    </div>
  )}
</li>


            <li className="cursor-pointer hover:text-gray-700 transition">
              CARRIER VS. GROWING THREAT
            </li>
          </ul>

          {/* User icon */}
          <button
            aria-label="Contact"
            className="text-white text-xl opacity-80 hover:text-gray-700 transition-opacity duration-200 focus:outline-none"
            type="button"
            style={{ fontWeight: "300" }}
          >
            <Link to="/contact" className="no-underline text-inherit"> <FaUser /> </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};
