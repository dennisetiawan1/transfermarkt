import React, { useState, useEffect } from 'react';
import ListItemFooter from '../elements/ListItemFooter';

const ListFooter = ({ header, items, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMdUp, setIsMdUp] = useState(window.innerWidth >= 768);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMdUp(window.innerWidth >= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='relative my-5 md:m-0'>
      <div className='flex justify-between items-center cursor-pointer md:cursor-auto' onClick={toggleSection}>
        <h1 className={`uppercase font-semibold md:font-bold ${className}`}>{header}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          className={`w-3 h-3 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-90'} md:hidden`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19l7-7-7-7" />
        </svg>
      </div>
      <hr className='md:hidden absolute -bottom-2 w-full border-blue-950 border' />
      {(isOpen || isMdUp) && (
        <ul className='py-4'>
          {items.map((item, index) => (
            <ListItemFooter key={index} text={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListFooter;
