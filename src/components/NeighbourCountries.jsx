import React from 'react'
import { useWorldRanksApi } from '../contexts/WorldRanksApi'

function NeighbourCountries({ border }) {
  const { countries } = useWorldRanksApi()

  const findNeighbour = countries?.find((country) => country.cca3 === border)
  console.log(findNeighbour);
  
  return (
    <div className='flex flex-col gap-2'>
      <img src={findNeighbour.flags.svg} alt={findNeighbour.flags.alt} className='w-24 rounded-lg'/>
      <span>{findNeighbour.name.common}</span>
    </div>
  )
}

export default NeighbourCountries