import React from 'react'

const QuickSelectButton = ({ icon, text }) => {
  return (
    <li className='flex items-center gap-1 bg-gray-100'>
        <img src={icon} className='w-10 bg-blue-primary' alt="" />
        <p>{text}</p>
        <span className='arrow-menu'></span>
        <div className='bg-gray-200 h-full flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19l7-7-7-7" />
        </svg>
        </div>
    </li>
  )
}

export default QuickSelectButton
