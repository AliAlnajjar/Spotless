// components/Header.jsx
'use client';
//TODO add animation to the menu bar when it goes ffom non sticky yo sticky
import Image from 'next/image';

import { useState, useEffect } from 'react';
import { Button } from '@material-tailwind/react';
import CallIcon from '../../public/icons/phone_in_talk_36dp_5F6368_FILL0_wght400_GRAD0_opsz40.svg';

const CallButton = () => {
  return (
    <a href="tel:+4791280406">
      <Button
        variant="outlined"
        size="lg"
        color="green"
        className="flex items-center text-bold text-lg text-primary"
      >
        <Image
          src="/icons/phone_in_talk_36dp_5F6368_FILL0_wght400_GRAD0_opsz40.svg"
          alt="call icon"
          width={24}
          height={24}
          className="object-cover text-primary"
          priority={true}
        />
        91280406
      </Button>
    </a>
  );
};
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('NO');
  const [isSticky, setIsSticky] = useState(false); // State to manage the stickiness of the menu bar

  // Effect to add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
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
      className={`relative w-full py-4 bg-white  transition-all duration-300 z-50 ${
        isSticky ? 'sticky top-0 shadow-md' : ''
      }`}
    >
      {/* Top Navigation Bar */}
      <nav className="max-w-screen-2xl flex px-4 justify-between items-center mx-auto">
        {/* Brand Name / Logo */}
        <div className="text-4xl font-bold">Spotless</div>

        {/* Menu items and language switch for larger screens */}
        <div className="hidden md:flex items-center ml-auto space-x-2">
          <a href="#home" className="text-xl px-2 py-1.5 hover:underline">
            Home
          </a>
          <a href="#kontakt" className="text-xl px-2 py-1.5 hover:underline">
            Kontakt oss
          </a>
          <a href="#priser" className="text-xl px-2 py-1.5 hover:underline">
            Priser
          </a>
          <a href="#faq" className="text-xl px-2 py-1.5 hover:underline">
            FAQ
          </a>
        </div>

        {/*Action Button*/}
        <div className="hidden md:flex justify-between items-end ml-auto space-x-12">
          <CallButton />
        </div>

        {/* Hamburger menu for small screens */}
        <button
          className="md:hidden text-4xl text-bold"
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
              <div className="text-4xl font-bold">Spotless</div>
              <button className="text-3xl" onClick={() => setMenuOpen(false)}>
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
                <CallButton />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
