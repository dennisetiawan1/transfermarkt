import React from 'react'
import TransferCard from '../fragments/TransferCard'

const Transfer = () => {
  return (
    <div className='bg-white mt-5 px-0.5'>
        <div className='relative bg-white'>
            <h1 className='highlight-title after:bg-green-600 font-bold text-xl text-black'>TRANSFER</h1>
            <hr className='mb-1 border-gray-300 border-2' />
        </div>
        <div className='md:flex gap-1 justify-center'>
          <TransferCard />
          <TransferCard />
          <TransferCard />
        </div>
    </div>
  )
}

export default Transfer
