import React from 'react'
import TransferCard from '../fragments/TransferCard'
import dari1 from '../../assets/tim/dari-1.png';
import tujuan1 from '../../assets/tim/tujuan-1.png';
import transfer1 from '../../assets/pemain/transfer-1.png';

const RumorData = [
  { player: 'Lionel Messi', position: 'Persib', to: tujuan1, fee: '30%', playerImage: transfer1 },
  { player: 'Lionel Messi', position: 'Persib', to: tujuan1, fee: '30%', playerImage: transfer1 },
  { player: 'Lionel Messi', position: 'Persib', to: tujuan1, fee: '30%', playerImage: transfer1 },
  { player: 'Lionel Messi', position: 'Persib', to: tujuan1, fee: '30%', playerImage: transfer1 },
  { player: 'Lionel Messi', position: 'Persib', to: tujuan1, fee: '30%', playerImage: transfer1 },
]

const Transfer = () => {
  return (
    <div className='bg-white mt-5 px-0.5 md:px-2'>
        <div className='relative bg-white'>
            <h1 className='highlight-title after:bg-green-600 font-bold text-xl text-black'>TRANSFER</h1>
            <hr className='mb-1 border-gray-300 border-2' />
        </div>
        <div className='md:flex gap-1 justify-center'>
          <TransferCard />
          <TransferCard
          title='Transfer Top Musim Dingin'
          />
          <TransferCard
            title='Rumor Terakhir'
            biaya='%'
            Data={RumorData}
          />
        </div>
    </div>
  )
}

export default Transfer
