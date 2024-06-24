import React from 'react'

const ListItemFooter = ({text}) => {
  return (
    <li className='flex items-center py-0.5'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19l7-7-7-7" />
        </svg>
        <a href="" className='text-xs'>{text}</a>
    </li>
  )
}

export default ListItemFooter
