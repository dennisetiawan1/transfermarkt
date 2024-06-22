import React from 'react'
import BeritaCard from '../elements/BeritaCard'
import berita from '../../assets/icons/berita.svg'
import briLiga from '../../assets/liga/briLiga.png'
import updateMV from '../../assets/update-mv.png'
import kompetisiIcon from '../../assets/icons/kompetisi.svg'
import kompetisi from '../../assets/kompetisi.png'
import euro from '../../assets/liga/euro.png'
import beritaEuro from '../../assets/berita.png'
import BeritaCardMD from '../elements/BeritaCardMD'

const Berita = () => {
  return (
    <div className=''>
      <div className='md:hidden'>
        <BeritaCard
        icon={berita} 
        titleKiri="Berita"
        liga={briLiga}
        titleKanan='Update market value'
        imgBerita={updateMV}
        desc='Kenaikan dan penurunan yang cukup terasa'
        />
        <BeritaCard
        icon={kompetisiIcon} 
        titleKiri="Kompetisi"
        liga={euro}
        titleKanan='Bikin skuad euro 2024'
        imgBerita={kompetisi}
        desc='Tentukan skuad dan pilih pemain terbaik versimu!'
        bgColor='bg-merah-tua'
        />
        <BeritaCard
        icon={berita} 
        titleKiri="Berita"
        liga={euro}
        titleKanan='Euro 2024'
        imgBerita={beritaEuro}
        desc='Semua Tentang Euro 2024'
        />
      </div>
      <div className='hidden md:flex gap-2 mt-2'>
        <BeritaCardMD
        imgBerita={updateMV}
        title='Update market value'
        icon={berita}
        liga={briLiga}
        desc='Kenaikan dan penurunan yang cukup terasa'
        />
        <BeritaCardMD
        imgBerita={kompetisi}
        title='Bikin skuad euro 2024'
        icon={kompetisiIcon}
        liga={euro}
        desc='Tentukan skuad dan pilih pemain terbaik versimu!'
        bgColor='bg-merah-tua'
        />
        <BeritaCardMD
        imgBerita={beritaEuro}
        title='Euro 2024'
        icon={berita}
        liga={euro}
        desc='Semua Tentang Euro 2024'
        />
      </div>
    </div>
  )
}

export default Berita
