import React from 'react'

const Button = ({children, onClick, bgColor = 'bg-blue-secondary', className}) => {
  return (
    <button className={`${bgColor} ${className} p-2 rounded-sm`}>
        {children}
    </button>
  )
}

export default Button
