import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="py-4 bg-gray-100 fixed top-0 left-0 w-full z-50">
      <div className="container flex justify-between items-center mx-auto">
        {/* Logo */}
        <div>
          <p className="text-lg font-semibold">
            FOOD<span className="text-red-500">EAT</span>
          </p>
        </div>

        {/* Links for Smooth Scrolling */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 sm:flex">
            <li className="hover:border-b-2 border-primary uppercase font-semibold">
              <Link smooth to="#hero">Home</Link>
            </li>
            <li className="hover:border-b-2 border-primary uppercase font-semibold">
              <Link smooth to="#toplist">Menu</Link>
            </li>
            <li className="hover:border-b-2 border-primary uppercase font-semibold">
              <Link smooth to="#banner">About</Link>
            </li>
            <li className="hover:border-b-2 border-primary uppercase font-semibold">
              <Link smooth to="#services">Services</Link>
            </li>
          </ul>
        </div>

        {/* Hamburger icon for small screens */}
        <div className="md:hidden flex items-center" onClick={toggleMobileMenu}>
          <span className="text-xl">☰</span>
        </div>

        {/* Profile Section */}
        <div className="flex gap-4 items-center">
          <img
            className="w-10 h-10 rounded-full"
            src="/images/profile.png"
            alt="profile"
          />
          <IoIosArrowDown />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-200 p-4">
          <ul className="flex flex-col gap-4">
            <li className="hover:border-b-2 border-primary uppercase font-semibold">
              <Link smooth to="#hero" onClick={toggleMobileMenu}>Home</Link>
            </li>
            <li className="hover:border-b-2 border-primary uppercase font-semibold">
              <Link smooth to="#toplist" onClick={toggleMobileMenu}>Menu</Link>
            </li>
            <li className="hover:border-b-2 border-primary uppercase font-semibold">
              <Link smooth to="#banner" onClick={toggleMobileMenu}>About</Link>
            </li>
            <li className="hover:border-b-2 border-primary uppercase font-semibold">
              <Link smooth to="#services" onClick={toggleMobileMenu}>Services</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
