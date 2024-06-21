import React from 'react'
import berita from '../../assets/icons/berita.svg'
import briLiga from '../../assets/liga/briLiga.png'
import updateMV from '../../assets/update-mv.png'

const Berita = () => {
  return (
    <div className='bg-white mt-3 pt-2 pb-2 pl-2'>
      <div className=''>
        <div className='mb-0.5 flex items-center relative text-white font-semibold uppercase'>
            <div className='p-2 bg-blue-muda-100 rounded-full border-2 absolute -top-2'>
                <img src={berita} className='w-[18px]' alt="" />
            </div>
            <p className='w-1/2 bg-blue-muda-100 py-1 text-center text-xs'>Berita</p>
            <div className='bg-white border absolute left-[138px]'>
                <img src={briLiga} className='w-[28px]' alt="" />
            </div>
            <p className='w-1/2 bg-blue-primary text-xs pl-5 p-1'>Update market value</p>
        </div>
        <div className='flex items-center'>
            <div className='w-1/2'>
                <img src={updateMV} className='w-[167px]' alt="" />
            </div>
            <p className='px-2 w-1/2'>Kenaikan dan Penurunan Yang Cukup Terasa</p>
        </div>
      </div>
    </div>
  )
}

export default Berita
