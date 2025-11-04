import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Sociale from '../components/Socials';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex justify-between items-center px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/logo.png" 
            width={120} 
            height={40} 
            alt="Logo" 
            className="cursor-pointer w-24 h-auto sm:w-36"
          />
        </Link>

        {/* Desktop Socials */}
        <div className="hidden md:block">
          <Sociale />
        </div>

        {/* Menu Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Submenu Vertical */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-gray-900 to-black shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Socials */}
          <div className="px-4 py-6">
            <Sociale />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;