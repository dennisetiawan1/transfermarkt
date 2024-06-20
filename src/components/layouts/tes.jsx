import React, { useRef, useState, useEffect } from 'react';
import searchIcon from '../../assets/icons/search-icon.png';
import cartIcon from '../../assets/icons/cart-icon.png';
import amazonLogo from '../../assets/amazon-logo-white.png';
import amazonLogoMobile from '../../assets/amazon-mobile-logo-white.png';
import '../../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed w-full bg-black text-white flex items-center pl-3">
      <div className="flex">
        <a href="/" className="p-2">
          <img className="hidden sm:block sm:w-[100px] mt-1" src={amazonLogo} alt="Amazon Logo" />
          <img className="sm:hidden w-[36px] mt-1" src={amazonLogoMobile} alt="Amazon Logo" />
        </a>
      </div>

      <div className="flex items-center px-3">
        <input
          className="w-[170px] p-2 pl-4 text-black rounded-l-md outline-none"
          type="text" 
          placeholder="Search"
        />
        <button className="bg-yellow-300 p-2 rounded-r-md">
          <img className="w-6" src={searchIcon} alt="search-icon" />
        </button>
      </div>

      {/* Hamburger Menu untuk Layar Kecil */}
      <div className='sm:hidden pl-2'>
        <button onClick={toggleMenu}>
          {isOpen ? (
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Dropdown untuk Layar Kecil */}
      {isOpen && (
        <div className="sm:hidden absolute top-14 right-0 bg-white bg-opacity-70 backdrop-blur-sm shadow-lg rounded-md p-2">
          <ul className="flex flex-col gap-2 py-2 uppercase font-medium text-gray-700 text-sm items-center">
            <li className='hover:text-navy'><a href="#Home" onClick={toggleMenu}>Home</a></li>
            <li className='hover:text-navy'><a href="#About" onClick={toggleMenu}>About</a></li>
            <li className='hover:text-navy'><a href="#Skills" onClick={toggleMenu}>Skills</a></li>
            <li className='hover:text-navy'><a href="#Projects" onClick={toggleMenu}>Projects</a></li>
            <li className='hover:text-navy'><a href="#Contacts" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}

      {/* Menu untuk Layar Besar */}
      <div className="hidden sm:flex pl-2">
        <a href='' className="flex flex-col">
          <span className="text-xs">Returns</span>
          <span className="text-sm font-bold">& Orders</span>
        </a>
        <div className="flex justify-center items-end w-28">
          <div className="relative">
            <span className="absolute right-4 -top-1 text-orange-400">3</span>
            <img className='w-12' src={cartIcon} alt="cart-icon" />
          </div>
          <span className='font-bold'>Cart</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
