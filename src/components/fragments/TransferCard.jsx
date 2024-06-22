import React from 'react';
import transfer1 from '../../assets/pemain/transfer-1.png';
import dari1 from '../../assets/tim/dari-1.png';
import tujuan1 from '../../assets/tim/tujuan-1.png';

const transferData = [
  { player: 'Lionel Messi', position: 'Depan-tengah', from: dari1, to: tujuan1, fee: 'Free Transfer', playerImage: transfer1 },
  { player: 'Cristiano Ronaldo', position: 'Depan-tengah', from: dari1, to: tujuan1, fee: '€15m', playerImage: transfer1 },
  { player: 'Kevin De Bruyne',position: 'Depan-tengah', from: dari1, to: tujuan1, fee: '€75m', playerImage: transfer1 },
  // Add more transfers as needed
];

const TransferCard = () => {
  return (
    <div className='mx-0.5'>
      <h2 className='pl-2 text-white bg-blue-primary uppercase'>Transfer terakhir</h2>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='py-2 px-4 bg-gray-200 text-left'>Pemain/Posisi</th>
            <th className='py-2 px-4 bg-gray-200 text-left'>Klub</th>
            <th className='py-2 px-4 bg-gray-200 text-left'>Biaya Transfer</th>
          </tr>
        </thead>
        <tbody>
          {transferData.map((transfer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className=''>
                <div className='flex items-center py-2 px-4 border-b'>
                    <img src={transfer.playerImage} alt={transfer.player} className='w-10 h-10 mr-2' />
                    <div className='flex flex-col'>
                        <p>{transfer.player}</p>
                        <p>{transfer.position}</p>
                    </div>
                </div>
              </td>
              <td className=''>
                <div className='relative flex items-center'>
                  <img src={transfer.from} alt="From Club" className='absolute opacity-50 top-0 w-6 h-6' />
                  <img src={transfer.to} alt="To Club" className='absolute right-1 w-10 h-10' />
                </div>
              </td>
              <td className='py-2 px-4 border-b'>{transfer.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransferCard;
