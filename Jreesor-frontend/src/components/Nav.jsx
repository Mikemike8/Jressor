import React from 'react';
import { FaUser } from 'react-icons/fa';

export const Nav = () => {
  return (
    <div>
      <nav
        className="fixed w-full z-50 text-black border-b border-black/10 overflow-hidden backdrop-blur-sm"
        style={{
          background: 'transparent',
          fontFamily: "'Garamond', serif",
        }}
      >
        <div className="max-w-[2000px] mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Left side: Logo */}
            <div className="flex flex-row items-center text-center">
              <span className="text-2xl tracking-widest text-black font-serif">
                REESOR{' '}
                <span className="text-xs align-top ml-1 tracking-normal font-sans">
                  ASSOCIATES
                </span>
              </span>
            </div>

            {/* Middle: Nav links */}
            <ul className="flex space-x-8 text-black font-semibold text-base">
              <li className="cursor-pointer hover:text-gray-700 transition">HOME</li>
              <li className="cursor-pointer hover:text-gray-700 transition">ABOUT</li>
              <li className="cursor-pointer hover:text-gray-700 transition">PLACE DEBT</li>
              <li className="cursor-pointer hover:text-gray-700 transition">CARRIER VS. GROWING THREAT</li>
            </ul>

            {/* Right: Phone icon */}
            <button
              aria-label="Contact"
              className="text-black text-xl opacity-80 hover:opacity-100 transition-opacity duration-200 focus:outline-none"
              type="button"
              style={{ fontWeight: '300' }}
            >
              <FaUser />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
