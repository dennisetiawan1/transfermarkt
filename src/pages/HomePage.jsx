import React from 'react'
import Navbar from '../components/layouts/Navbar'
import Menu from '../components/fragments/Menu'
import Sorotan from '../components/layouts/Sorotan'
import Transfer from '../components/layouts/Transfer'
import Footer from '../components/layouts/Footer'

const HomePage = () => {
  return (
    <div className='lg:w-4/5 mx-auto bg-gray-200'>
      <Navbar />
      <Menu />
      <Sorotan />
      <Transfer />
      <Footer />
    </div>
  )
}

export default HomePage
