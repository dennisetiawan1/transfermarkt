import React, { useState } from 'react';
import slideSatu from '../../assets/pemain/1.png';
import slideDua from '../../assets/pemain/2.png';
import timSatu from '../../assets/tim/1.png';
import timDua from '../../assets/tim/2.png';
// import iklan from '../../assets/iklan.png';

const SorotanSlides = () => {
    const slides = [
        { 
            title: 'klub anyar malik risaldi',
            desc: 'Bergabung Dengan Persebaya Surabaya, Malik Risaldi Diikat dengan Kontrak 2 Tahun',
            img: slideSatu,
            tim: timSatu
         },
        { 
            title: 'proses naturalisasi maarten paes',
            desc: 'Tidak Ada Nama Maarten Paes Disidang CAS Bulan Ini, Batal Naturalisasi?',
            img: slideDua,
            tim: timDua
        },
        { 
            title: 'proses naturalisasi maarten paes',
            desc: 'Tidak Ada Nama Maarten Paes Disidang CAS Bulan Ini, Batal Naturalisasi?',
            img: slideDua,
            tim: timDua
        },
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full bg-white">
            <div className='relative pb-2 md:pb-0'>
                <div className="flex justify-center items-center relative">
                    <button 
                        onClick={prevSlide} 
                        className="absolute top-5 left-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none md:top-1/4"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="w-full md:h-[410px]">
                        <img 
                            src={slides[current].img} 
                            alt={`Slide ${current + 1}`} 
                            className="w-full h-full md:object-fill"
                        />
                    </div>
                    <button 
                        onClick={nextSlide} 
                        className="absolute top-5 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none md:top-1/4"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19l7-7-7-7" />
                        </svg>
                    </button>
                    <div className='absolute left-0 bottom-0 w-full'>
                        <h2 className='inline-block text-white font-bold uppercase text-xs px-2 bg-blue-400 md:text-sm'>
                            {slides[current].title}
                        </h2>
                        <div className='flex w-full items-center gap-2 text-white font-bold px-2 py-2 bg-gradient-to-t from-blue-primary via-blue-primary/100 to-transparent'>
                            <div className='bg-white p-1'>
                                <img src={slides[current].tim} className='w-[60px] object-cover' alt="" />
                            </div>
                            <a href="" className='font-oswald font-medium leading-tight text-sm md:text-lg md:hover:text-blue-muda-100 cursor-pointer'>
                                {slides[current].desc}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-2 md:absolute top-0">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`md:h-4 md:w-4 h-2 w-2 mx-1 rounded-full cursor-pointer transition-colors duration-300 ${current === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                            onClick={() => setCurrent(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SorotanSlides;
