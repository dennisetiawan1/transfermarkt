import React from 'react'
import berita from '../../assets/icons/berita.svg'
import briLiga from '../../assets/liga/briLiga.png'
import updateMV from '../../assets/update-mv.png'
import kompetisiIcon from '../../assets/icons/kompetisi.svg'
import kompetisi from '../../assets/kompetisi.png'
import euro from '../../assets/liga/euro.png'
import beritaEuro from '../../assets/berita.png'

const BeritaCardMD = ({ icon, liga, imgBerita, titleKiri, titleKanan, desc, bgColor = 'bg-blue-muda-100'}) => {
  return (
    <div className=''>
      <div>
        <img src={updateMV} alt="" />
      </div>
      <div>
        <div className='flex justify-between'>
            <p className={`${bgColor} py-1 text-center font-bold text-white uppercase`}>Update market value</p>
            <div className={`p-2 ${bgColor} rounded-full border-2 border-white`}>
                <img src={berita} className='w-[18px]' alt="" />
            </div>
        </div>
        <div className='flex bg-gray-con p-3'>
            <div className='bg-white p-2'>
                <img src={briLiga} className='w-[28px]' alt="" />
            </div>
            <p className=''>Kenaikan dan Penurunan Yang Cukup Terasa</p>
        </div>
      </div>
    </div>
  )
}

export default BeritaCardMD
