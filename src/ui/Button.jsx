import React from 'react'

function Button({children}) {
  return (
    <button className='rounded-md cursor-pointer font-semibold px-4 py-1 bg-[#6C727F] text-[#D2D5DA]'>{children}</button>
  )
}

export default Button