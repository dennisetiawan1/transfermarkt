import React from 'react'
import SorotanSlides from '../fragments/SorotanSlides'
import Iklan from '../fragments/Iklan'
import Trending from '../fragments/Trending'

const Sorotan = () => {
  return (
    <div className='relative w-full bg-gray-300 mt-2 sm:px-2 sm:bg-white'>
        <div className='hidden sm:block relative bg-white sm:py-1 sm:px-2'>
            <h1 className='highlight-title font-bold text-xl'>SOROTAN</h1>
            <hr className='mb-2 border-gray-300 border-2' />
        </div>

        <div className='sm:flex'>
            <div className='sm:w-full'>
                <SorotanSlides />
            </div>
            <div className='sm:flex sm:flex-col sm:pl-2'>
                <Iklan />
                <Trending />
            </div>
        </div>
    </div>
  )
}

export default Sorotan
