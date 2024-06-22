import React from 'react'

const BeritaCardMD = ({ icon, liga, imgBerita, title, desc, bgColor = 'bg-blue-muda-100'}) => {
  return (
    <div className='relative w-[334px] xl:w-full'>
      <div>
        <img src={imgBerita} className='xl:w-full' alt="" />
      </div>
      <div className='relative'>
        <div className='flex w-full pr-2 absolute bottom-14 justify-between items-center'>
            <p className={`${bgColor} py-1 px-2 text-center font-bold text-sm text-white uppercase`}>{title}</p>
            <div className={`p-2 ${bgColor} rounded-full border-2 border-white`}>
                <img src={icon} className='w-[18px]' alt="" />
            </div>
        </div>
        <div className='flex items-center gap-2 bg-gray-con p-3 pt-4'>
            <div className='bg-white p-2'>
                <img src={liga} className='w-[28px]' alt="" />
            </div>
            <p className=''>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default BeritaCardMD
