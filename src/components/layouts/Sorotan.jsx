import React from 'react'
import SorotanSlides from '../fragments/SorotanSlides'
import Iklan from '../fragments/Iklan'
import Trending from '../fragments/Trending'
import Berita from '../fragments/Berita'
import BeritaCardMD from '../elements/BeritaCardMD'


const Sorotan = () => {
  return (
    <div className='relative w-full bg-gray-300 mt-2 md:px-2 md:bg-white'>
        <div className='hidden md:block relative bg-white md:py-1 md:px-2'>
            <h1 className='highlight-title font-bold text-xl'>SOROTAN</h1>
            <hr className='mb-2 border-gray-300 border-2' />
        </div>

        <div className=''>
            <div className='md:flex'>
                <div className='md:w-full md:flex md:items-center'>
                    <SorotanSlides />
                </div>
                <div className='md:flex md:flex-col md:pl-2'>
                    <Iklan />
                    <Trending />
                </div>
            </div>
            <div className=''>
                <Berita />
            </div>
        </div>
    </div>
  )
}

export default Sorotan
