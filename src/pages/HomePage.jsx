import React from 'react'
import Navbar from '../components/layouts/Navbar'
import Menu from '../components/fragments/Menu'
import Sorotan from '../components/layouts/Sorotan'
import Transfer from '../components/layouts/Transfer'

const HomePage = () => {
  return (
    <div className='lg:w-4/5 mx-auto'>
      <Navbar />
      <Menu />
      <Sorotan />
      <Transfer />
    </div>
  )
}

export default HomePage
