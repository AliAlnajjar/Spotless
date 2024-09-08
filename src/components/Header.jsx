// components/Header.jsx
'use client';
//TODO add animation to the menu bar when it goes ffom non sticky yo sticky

import { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('NO');
  const [isSticky, setIsSticky] = useState(false); // State to manage the stickiness of the menu bar

  // Effect to add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // Adjust the scroll value as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`relative w-full py-4 bg-white transition-all duration-300 z-50 font-sans ${
        isSticky ? 'sticky top-0 shadow-md' : ''
      }`}
    >
      {/* Top Navigation Bar */}
      <nav className="max-w-screen-xl flex px-4 justify-between items-center mx-auto">
        {/* Brand Name / Logo */}
        <div className="text-2xl font-bold">Spotless</div>

        {/* Menu items and language switch for larger screens */}
        <div className="hidden md:flex items-center ml-auto space-x-2">
          <a href="#home" className="text-lg px-2 py-1.5 hover:underline">
            Home
          </a>
          <a href="#kontakt" className="text-lg px-2 py-1.5 hover:underline">
            Kontakt oss
          </a>
          <a href="#priser" className="text-lg px-2 py-1.5 hover:underline">
            Priser
          </a>
          <a href="#faq" className="text-lg px-2 py-1.5 hover:underline">
            FAQ
          </a>
        </div>

        {/*Action Button*/}
        <div className="hidden md:flex justify-between items-end ml-auto space-x-12">
          {/* Action Button */}
          <button className="text-white bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-600">
            Få et pristilbud
          </button>

          {/* Language Switch */}
          <div className="flex space-x-1 border rounded-lg p-1">
            <button
              className={`px-2 py-1 rounded-lg ${
                language === 'NO'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-blue-500'
              }`}
              onClick={() => setLanguage('NO')}
            >
              NO
            </button>
            <button
              className={`px-2 py-1 rounded-lg ${
                language === 'EN'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-blue-500'
              }`}
              onClick={() => setLanguage('EN')}
            >
              EN
            </button>
          </div>
        </div>

        {/* Hamburger menu for small screens */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Full-Screen Menu for Mobile */}
        {menuOpen && (
          // <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 text-xl">
          <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 text-xl">
            {/* Brand and Close Button */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
              <div className="text-2xl font-bold">Spotless</div>
              <button className="text-2xl" onClick={() => setMenuOpen(false)}>
                ✕
              </button>
            </div>
            {/* Menu Items */}
            <ul className="flex flex-col items-center mt-12 space-y-0 w-10/12">
              <li className="py-8 border-b border-gray-300 w-full flex justify-center">
                <a href="#home" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li className="py-8 border-b border-gray-300 w-full flex justify-center">
                <a href="#kontakt" onClick={() => setMenuOpen(false)}>
                  Kontakt oss
                </a>
              </li>
              <li className="py-8 border-b border-gray-300 w-full flex justify-center">
                <a href="#priser" onClick={() => setMenuOpen(false)}>
                  Priser
                </a>
              </li>
              <li className="py-8 border-b border-gray-300 w-full flex justify-center">
                <a href="#faq" onClick={() => setMenuOpen(false)}>
                  FAQ
                </a>
              </li>
              <li className="py-8  w-full flex justify-center">
                <button
                  className="text-white bg-blue-500 rounded-lg px-2 py-2 hover:bg-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Få et pristilbud
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
