import React from 'react'
import berita from '../../assets/icons/berita.svg'
import briLiga from '../../assets/liga/briLiga.png'

const Berita = () => {
  return (
    <div className='bg-white mt-3'>
      <div className=''>
        <div className='flex'>
            <div className='p-2 bg-blue-muda'>
                <img src={berita} className='w-[28px]' alt="" />
            </div>
            <p>Berita</p>
            <div className='bg-white'>
                <img src={briLiga} className='w-[34px]' alt="" />
            </div>
            <p className='bg-blue-primary text-white font-bold uppercase text-xs'>Update market value</p>
        </div>
        <div>
            <div>
                <img src='' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Berita
