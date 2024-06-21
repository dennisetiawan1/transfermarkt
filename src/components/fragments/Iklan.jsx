import React from 'react'
import iklan from '../../assets/iklan.png';

const Iklan = () => {
  return (
    <div className='flex flex-col justify-center items-center px-3 py-5 bg-white md:py-0 md:pb-1 md:items-center'>
        <p className='text-center text-xs'>Iklan</p>
        <img src={iklan} className='sm:w-3/4 md:w-4/5 w-4/5 flex' alt="" />
    </div>
  )
}

export default Iklan
