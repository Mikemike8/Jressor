import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';

export const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      // Check if past hero
      const heroHeight = window.innerHeight; // assumes hero takes full screen height
      setPastHero(currentScrollY > heroHeight);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full z-50 border-b border-black/10 overflow-hidden backdrop-blur-sm transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        background: pastHero ? 'black' : 'transparent', // Make background black after hero
        fontFamily: "'Garamond', serif",
      }}
    >
      <div className="max-w-[2000px] mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Left side: Logo */}
          <div className="flex flex-row items-center text-center">
            <span className="text-2xl tracking-widest text-white hover:text-gray-700 font-serif">
              REESOR{' '}
              <span className="text-xs align-top ml-1 tracking-normal font-sans text-white">
                ASSOCIATES
              </span>
            </span>
          </div>

          {/* Middle: Nav links */}
          <ul className="flex space-x-8 text-white font-semibold text-base">
            <li className="cursor-pointer hover:text-gray-700 transition">HOME</li>
            <li className="cursor-pointer hover:text-gray-700 transition">ABOUT</li>
            <li className="cursor-pointer hover:text-gray-700 transition">PLACE DEBT</li>
            <li className="cursor-pointer hover:text-gray-700 transition">
              CARRIER VS. GROWING THREAT
            </li>
          </ul>

          {/* Right: User icon */}
          <button
            aria-label="Contact"
            className="text-white text-xl opacity-80 hover:text-gray-700 transition-opacity duration-200 focus:outline-none"
            type="button"
            style={{ fontWeight: '300' }}
          >
            <FaUser />
          </button>
        </div>
      </div>
    </nav>
  );
};
