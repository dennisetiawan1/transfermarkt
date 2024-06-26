import React, { useState } from 'react';
import ListFooter from '../fragments/ListFooter';
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import threads from '../../assets/icons/threads.svg'
import tiktok from '../../assets/icons/tiktok.svg'
import twitter from '../../assets/icons/twitter.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'
import wifi from '../../assets/icons/wifi.svg'
import youtube from '../../assets/icons/youtube.svg'

const Footer = () => {
  const quickLinksItems = [
    'Pemain paling berharga di dunia',
    'Transfer terkini',
    'Rumor terbaru',
    'Pembaruan harga pasaran terkini',
    'Ranking dunia FIFA'
  ];

  const careerItems = [
    'Kontak',
  ];

  const involvementItems = [
    'Mods & Data Scouts',
    '11 ketentuan',
    'Daftar sebagai moderator atau data scout',
    'Menemukan kesalahan?',
  ];

  const aboutUsItems = [
    'Tim TM',
    'FAQ',
  ];

  return (
    <div className='text-white font-sans pt-5'>
      <div className='bg-blue-primary md:grid grid-cols-3 md:px-10 md:pt-7'>
        <div className='px-10 pt-3 md:p-0 '>
          <ListFooter header='Link cepat' items={quickLinksItems} />
          <ListFooter header='Karir' items={careerItems} />
        </div>
        <div className='px-10 pb-7 md:p-0'>
          <ListFooter header='Ikut terlibat' items={involvementItems} />
          <ListFooter header='Tentang kita' items={aboutUsItems} className='md:mt-5' />
        </div>
        <div className='bg-blue-950 px-10 py-7 md:bg-blue-primary md:p-0 md:pr-8'>
          <h1 className='uppercase font-bold text-center mb-5 md:text-start'>Media Sosial</h1>
          <div className='flex items-center justify-center flex-wrap gap-x-8 gap-y-5 md:justify-start'>
              <div><img src={facebook} className='w-[20px] h-[20px]'  alt="" /></div>
              <div><img src={instagram} className='w-[20px]' alt="" /></div>
              <div><img src={threads} className='w-[20px]' alt="" /></div>
              <div><img src={tiktok} className='w-[20px]' alt="" /></div>
              <div><img src={twitter} className='w-[20px]' alt="" /></div>
              <div><img src={whatsapp} className='w-[20px]' alt="" /></div>
              <div><img src={wifi} className='w-[20px]' alt="" /></div>
              <div><img src={youtube} className='w-[20px]' alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
