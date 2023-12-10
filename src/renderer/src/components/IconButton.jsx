import React from 'react'

const IconButton = ({ children }) => {
  return (
    <div className='group flex justify-center items-center rounded-lg w-12 h-12 opacity:100 hover:bg-opacity-30  hover:bg-black '>
      <div className='group-hober:opacity-100'>
        {children}
      </div>
    </div>
  )
}

export default IconButton