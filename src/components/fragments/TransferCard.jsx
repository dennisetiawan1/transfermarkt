import React from 'react';
import { transferTerakhir } from '../../constants';

const TransferCard = ({ title = 'Transfer Terakhir', pemainKeterangan = 'Pemain/Posisi', klub = 'Klub', biaya = 'Biaya', Data = transferTerakhir }) => {
  return (
    <div className='mt-1 xl:w-full'>
      <h2 className='pl-2 text-white bg-blue-primary uppercase'>{title}</h2>
      <table className='min-w-full bg-whited'>
        <thead>
          <tr className='text-sm'>
            <td className='bg-gray-200 text-left px-4'>{pemainKeterangan}</td>
            <td className='bg-gray-200 text-center px-4'>{klub}</td>
            <td className='bg-gray-200 text-center px-4'>{biaya}</td>
          </tr>
        </thead>
        <tbody className='font-sans font-semibold'>
          {Data.map((transfer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100 hover:bg-gray-200 cursor-pointer' : 'bg-white hover:bg-gray-200 cursor-pointer'}>
              <td>
                <div className='flex items-center'>
                  <img src={transfer.playerImage} alt={transfer.player} className='w-10' />
                  <div className='flex flex-col text-xs font-bold w-full pl-2 md:pr-8'>
                    <p className='text-blue-muda hover:text-blue-muda-100'>{transfer.player}</p>
                    <p>{transfer.position}</p>
                  </div>
                </div>
              </td>
              <td className='w-[50px]'>
                <div className='relative flex items-center'>
                  {transfer.from && <img src={transfer.from} alt="From Club" className='w-[25px] object-fill absolute opacity-50 top-0 h-[25px]' />}
                  {transfer.to && <img src={transfer.to} alt="To Club" className='w-[35px] object-fill absolute right-1 h-[35px]' />}
                </div>
              </td>
              <td className='border-b text-center md:pl-3'><p className='font-semibold font-oswald leading-none'>{transfer.fee}<span className='text-xs'>{transfer.milyar}</span></p></td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="#" className='flex items-center justify-end py-2'>
        <p className='font-sans text-xs text-blue-muda font-bold'>Semua Transfer</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="blue" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19l7-7-7-7" />
        </svg>
      </a>
    </div>
  );
}

export default TransferCard;
