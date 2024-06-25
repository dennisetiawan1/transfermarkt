import React from 'react'
import TransferCard from '../fragments/TransferCard'
import { transferTop } from '../../constants';
import { RumorData } from '../../constants';

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
          Data={transferTop}
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
