import React from 'react'
import iklan from '../../assets/iklan.png';

const Iklan = () => {
  return (
    <div className='flex flex-col justify-center px-3 py-5 bg-white sm:py-0 sm:pb-2 sm:items-center'>
        <p className='text-center text-xs'>Iklan</p>
        <img src={iklan} className='sm:w-4/5 flex' alt="" />
    </div>
  )
}

export default Iklan
