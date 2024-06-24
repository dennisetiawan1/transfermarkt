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
    'Karir 1',
    'Karir 2',
    'Karir 3'
  ];

  const involvementItems = [
    'Ikut terlibat 1',
    'Ikut terlibat 2',
    'Ikut terlibat 3'
  ];

  const aboutUsItems = [
    'Tentang kita 1',
    'Tentang kita 2',
    'Tentang kita 3'
  ];

  return (
    <div className='md:flex justify-around bg-blue-primary text-white font-sans'>
      <div className='px-10 pt-5 pb-7'>
        <ListFooter header='Link cepat' items={quickLinksItems} />
        <ListFooter header='Karir' items={careerItems} />
        <ListFooter header='Ikut terlibat' items={involvementItems} />
        <ListFooter header='Tentang kita' items={aboutUsItems} />
      </div>
      <div className='bg-blue-950 px-10 py-7'>
        <h1 className='uppercase font-bold text-center mb-5'>Media Sosial</h1>
        <div className='flex items-center justify-center flex-wrap gap-x-8 gap-y-5'>
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
  );
}

export default Footer;
