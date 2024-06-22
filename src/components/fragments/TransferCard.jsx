import React from 'react';
import transfer1 from '../../assets/pemain/transfer-1.png';
import dari1 from '../../assets/tim/dari-1.png';
import tujuan1 from '../../assets/tim/tujuan-1.png';

const transferData = [
  { player: 'Lionel Messi', position: 'Depan-tengah', from: dari1, to: tujuan1, fee: 'Free', playerImage: transfer1 },
  { player: 'Gustavo Modesto', position: 'Depan-tengah', from: dari1, to: tujuan1, fee: '678,90', playerImage: transfer1 },
  { player: 'Kevin De Bruyne',position: 'Depan-tengah', from: dari1, to: tujuan1, fee: '1,267,88', playerImage: transfer1 },
  // Add more transfers as needed
];

const TransferCard = () => {
  return (
    <div className='mt-1 xl:w-full'>
      <h2 className='pl-2 text-white bg-blue-primary uppercase'>Transfer terakhir</h2>
      <table className='min-w-full bg-whited'>
        <thead>
          <tr className='text-sm'>
            <td className='bg-gray-200 text-left px-4'>Pemain/Posisi</td>
            <td className='bg-gray-200 text-center px-4'>Klub</td>
            <td className='bg-gray-200 text-center px-4'>Biaya</td>
          </tr>
        </thead>
        <tbody className='font-sans font-semibol'>
          {transferData.map((transfer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className=''>
                <div className='flex items-center'>
                    <img src={transfer.playerImage} alt={transfer.player} className='w-10' />
                    <div className='flex flex-col text-xs font-bold w-full pl-2 md:pr-8'>
                        <p className='text-blue-muda'>{transfer.player}</p>
                        <p>{transfer.position}</p>
                    </div>
                </div>
              </td>
              <td className='w-[60px]'>
                <div className='relative flex items-center'>
                  <img src={transfer.from} alt="From Club" className='w-[25px] object-cover absolute opacity-50 top-0 h-6' />
                  <img src={transfer.to} alt="To Club" className='w-[35px] object-cover absolute right-1 h-10' />
                </div>
              </td>
              <td className='border-b text-right md:pl-1'><span className='font-semibold font-oswald'>{transfer.fee}</span><span className='text-xs'>Mlyr.</span></td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href=""><p className='text-right py-1 px-4'>Semua Transfer</p></a>
    </div>
  );
}

export default TransferCard;
