import React from 'react'

const BeritaCard = ({ icon, liga, imgBerita, titleKiri, titleKanan, desc, bgColor = 'bg-blue-muda-100'}) => {
  return (
    <div className='mt-2'>
      <div className='pt-2 pl-2 pb-2 bg-white'>
        <div className='mb-0.5 flex items-center relative text-white font-semibold uppercase'>
            <div className={`p-2 ${bgColor} rounded-full border-2 absolute -top-2`}>
                <img src={icon} className='w-[18px]' alt="" />
            </div>
            <p className={`w-1/2 ${bgColor} py-1 text-center text-xs`}>{titleKiri}</p>
            <div className='bg-white border'>
                <img src={liga} className='w-[28px]' alt="" />
            </div>
            <p className='w-1/2 bg-blue-primary text-xs pl-5 p-1'>{titleKanan}</p>
        </div>
        <div className='flex items-center'>
            <div className='w-1/2'>
                <img src={imgBerita} className='w-full' alt="" />
            </div>
            <p className='px-2 w-1/2'>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default BeritaCard
