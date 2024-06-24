import React, { useState } from 'react';
import ListItemFooter from '../elements/ListItemFooter';

const ListFooter = ({ header, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative my-5'>
      <div className='flex justify-between items-center cursor-pointer' onClick={toggleSection}>
        <h1 className='uppercase font-semibold'>{header}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          className={`w-3 h-3 transform ${isOpen ? 'rotate-180' : 'rotate-90'}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19l7-7-7-7" />
        </svg>
      </div>
      <hr className='absolute -bottom-2 w-full border-blue-950 border' />
      {isOpen && (
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
