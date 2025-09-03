import React from 'react'
import { useWorldRanksApi } from '../contexts/WorldRanksApi'

function Button({ children, value }) {
  const { handleSelectedRegion } = useWorldRanksApi()
  return (
    <button value={value} onClick={handleSelectedRegion} className='rounded-md cursor-pointer font-semibold px-4 py-1 bg-[#6C727F] text-[#D2D5DA]'>{children}</button>
  )
}

export default Button