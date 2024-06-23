import React, { useState } from 'react';
import { trends } from '../../constants';
import '../../index.css'

const Trending = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trends.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + trends.length) % trends.length);
  };

  return (
    <div className='relative bg-white py-2 mt-3 md:mt-0 md:w-[322px] lg:w-[335px]'>
      <div
        className='border-2 shadow-sm pt-2 overflow-hidden'
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <h1 className='uppercase font-bold text-white bg-blue-primary pl-3'>Pemain paling dicari</h1>
        <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {trends.map((trend, index) => (
            <div key={index} className='flex-shrink-0 w-full flex pl-2 pt-2 mb-4'>
              <div>
                <img src={trend.img} className='w-[94px]' alt={trend.name} />
              </div>
              <div className='w-full px-2'>
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='flex items-center gap-2'>
                      <h3 className='font-bold text-blue-muda'>{trend.name}</h3>
                      <div>
                        <img src={trend.negara} className='w-[17px]' alt="" />
                      </div>
                    </div>
                    <p className='text-xs'>Harga Pasaran: <span className='font-bold text-gray-800'>{trend.value}</span></p>
                  </div>
                  <p className='font-bold bg-gray-con py-1 px-2 text-2xl'>#{currentIndex + 1}</p>
                </div>
                <div className='flex items-center gap-2 bg-gray-con p-1 mt-2'>
                  <div className='bg-white p-1'>
                    <img src={trend.tim} className='w-[24px]' alt="" />
                  </div>
                  <p className='text-xs text-blue-muda font-bold'>{trend.nama_tim}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 pb-2'>
          {trends.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="absolute top-8 sm:left-[600px] md:left-[250px] lg:left-[250px] transform -translate-y-1/2 flex gap-1 px-2">
        <button className="hidden bg-blue-primary border sm:block p-1" onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="hidden sm:block bg-blue-primary border p-1" onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19l7-7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Trending;
