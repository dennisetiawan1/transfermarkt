import React, { useRef, useState, useEffect } from 'react';
import tmLogo from '../../assets/tm_logo_rebrush.svg';
import '../../index.css';
import Button from '../elements/Button';
import { liga } from '../../constants';
import searchDetail from '../../assets/icons/search-detail.svg';
import favorit from '../../assets/icons/favorit.svg';
import mainClub from '../../assets/icons/main-club.svg';
import search from '../../assets/icons/search.svg';
import mainBlack from '../../assets/icons/main-black.svg';
import favoritBlack from '../../assets/icons/favorit-black.svg';
import user from '../../assets/icons/user.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    const handleClick = (event) => {
      if (isOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClick);
    } else {
      document.removeEventListener('click', handleClick);
    }

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full text-white z-10 lg:w-4/5 transition-all duration-300`}>
      <div className={`flex justify-around items-center bg-blue-primary pt-5 px-2 py-3 sm:justify-between sm:px-6 sm:bg-grey-nav ${isScrolled ? 'sm:py-3' : 'sm:py-5'}`} ref={navbarRef}>
        <div className="flex gap-1">
          <a href="/" className="">
            <img className={`w-[60px] transition-all duration-300 ${isScrolled ? 'sm:w-[100px]' : ' sm:w-[150px]'}`} src={tmLogo} alt="Transfermarkt Logo" />
          </a>
          <a href="" className='flex gap-1 items-end font-bold text-xs sm:text-black'>
            .co.id
            <span className='arrow sm:hidden'></span>
            <span className='arrow-lg'></span>
          </a>
        </div>

        <div className='hidden sm:flex gap-1'>
          <div className='flex gap-2 w-[370px] bg-white'>
            <input className='w-[330px] pl-3 py-2' type="text" placeholder='Masukkan Kata Pencarian (contoh pemain, klub' />
            <img src={search} className='w-[18px]' alt="" />
          </div>
          <Button className='bg-gray-50'>
            <img src={searchDetail} alt="" />
          </Button>
        </div>

        <div>
          <ul className='flex gap-2'>
            <li>
              <Button className='sm:bg-gray-50'>
                <img src={favorit} className='sm:hidden' alt="" />
                <img src={favoritBlack} className='sm:block hidden' alt="" />
              </Button>
            </li>
            <li>
              <Button className='sm:bg-gray-50'>
                <img src={mainClub} className='sm:hidden' alt="" />
                <img src={mainBlack} className='sm:block hidden' alt="" />
              </Button>
            </li>
            <li>
              <Button className='sm:hidden' bgColor='bg-button-click'>
                <img src={user} alt="" />
              </Button>
            </li>
            <li>
              <Button className='hidden sm:flex items-center gap-2' bgColor='bg-blue-400'>
                <img src={user} alt="" />
                <p className='text-xs font-bold'>MASUK</p>
              </Button>
            </li>
          </ul>
        </div>

        <div className='flex items-center gap-4 sm:hidden'>
          <div className='flex items-center'>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="23" height="26" viewBox="0, 0, 23, 26">
                <g id="search-icon">
                  <path d="M9.801,0 C16.609,0 19,1.806 19,8.977 L19,9.386 C18.9,11.943 19.071,15.105 17.171,17.092 L23,24.423 L21.061,26 L15.115,18.521 C13.402,19.133 11.593,19.17 9.801,19.203 L9.493,19.203 C1.706,19.203 0,16.979 0,9.386 L0,8.977 C0,1.374 2.884,0 9.493,0 L9.801,0 z M9.801,2.516 L9.493,2.516 C6.47,2.516 4.73,2.843 3.854,3.576 C3.516,3.859 2.488,4.718 2.488,8.977 L2.488,9.386 C2.488,12.702 2.843,14.562 3.639,15.418 C4.444,16.283 6.304,16.687 9.493,16.687 L9.801,16.687 C12.831,16.687 14.529,16.325 15.306,15.513 C16.129,14.653 16.512,12.706 16.512,9.386 L16.512,8.977 C16.512,6.132 16.117,4.44 15.269,3.651 C14.437,2.877 12.699,2.516 9.801,2.516 z" fill="#FFFFFF"></path>
                </g>
              </svg>
            </button>
          </div>
          <div className='sm:hidden flex items-start'>
            <button onClick={toggleMenu} className={`menu-button ${isOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden fixed right-0 border-t transition-all duration-500 transform ${isOpen ? 'nav-open' : 'nav-close'}`}>
        <div className="h-screen py-4 uppercase font-bold bg-blue-primary text-white text-sm overflow-y-scroll ">
          <ul className='px-10'>
            <li className='hover:text-navy'><a href="#Home" onClick={toggleMenu}>Beranda</a></li>
            <hr className="border-gray-700 border-t my-2 w-full" />
            <li className='hover:text-navy'><a href="#About" onClick={toggleMenu}>Transfer & Rumor</a></li>
            <hr className="border-gray-700 border-t my-2 w-full" />
            <li className='hover:text-navy'><a href="#Skills" onClick={toggleMenu}>Harga Pasaran</a></li>
            <hr className="border-gray-700 border-t my-2 w-full" />
            <li className='hover:text-navy'><a href="#Projects" onClick={toggleMenu}>Kompetisi</a></li>
            <hr className="border-gray-700 border-t my-2 w-full" />
            <li className='hover:text-navy'><a href="#Contacts" onClick={toggleMenu}>Statistik</a></li>
            <hr className="border-gray-700 border-t my-2 w-full" />
            <li className='hover:text-navy'><a href="#Contacts" onClick={toggleMenu}>Komunitas</a></li>
            <hr className="border-gray-700 border-t my-2 w-full" />
            <li className='hover:text-navy'><a href="#Contacts" onClick={toggleMenu}>Permainan</a></li>
            <hr className="border-gray-700 border-t my-2 w-full" />
            <li className='hover:text-navy'><a href="#Contacts" onClick={toggleMenu}>Euro 2024</a></li>
            <hr className="border-gray-700 border-t my-2 w-full" />
            <li className='hover:text-navy'><a href="#Contacts" onClick={toggleMenu}>Penyiaran</a></li>
            <hr className="border-gray-600 border-t my-2 w-full" />
          </ul>
          <h2 className='text-center mt-7'>Rekomendasi</h2>
          <div className='grid grid-cols-3 gap-3 gap-y-5 mx-4 mt-4'>
            {liga.map((liga, index) => (
              <div key={index} className='bg-white rounded-md p-2'>
                <img src={liga.img} className='w-[65px]' alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`hidden sm:block bg-blue-primary text-white uppercase font-bold transition-all duration-300 ${isScrolled ? 'py-2' : 'py-5'}`}>
        <ul className='flex justify-around text-sm'>
          <li className='text-blue-400'><a href="">Beranda</a></li>
          <li><a href="">Transfer & Rumor</a></li>
          <li><a href="">Harga Pasaran</a></li>
          <li><a href="">Kompetisi</a></li>
          <li><a href="">Statistik</a></li>
          <li><a href="">Komunitas</a></li>
          <li><a href="">Permainan</a></li>
          <li><a href="">Euro 2024</a></li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
