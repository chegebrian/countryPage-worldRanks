import React from 'react'
import NeighbourCountries from '../components/NeighbourCountries'

function Info() {
  return (
    <section className='p-4 bg-[#1B1D1F] text-[#D2D5DA]'>
      <div className='flex flex-col gap-4 items-center'>
        <img src="" alt="country-flag" />
        <div className='text-center'>
          <h2 className='text-2xl font-bold capitalize'>india</h2>
          <p className='capitalize text-lg'>republic of india</p>
        </div>
        <div className='flex items-center gap-6'>
          <div className='bg-[#282B30] py-2 px-4 rounded-md flex items-center gap-2 divide-x divide-[#1B1D1F]'>
            <span className='capitalize font-semibold pr-2'>population</span>
            <span>2000000</span>
          </div>
          <div className='bg-[#282B30] py-2 px-4 rounded-md flex items-center gap-2 divide-x divide-[#1B1D1F]'>
            <span className='capitalize font-semibold pr-2'>area(km²)</span>
            <span>3000000</span>
          </div>
        </div>
      </div>
      <div>
        <div className='font-semibold flex items-center justify-between capitalize'>
          <span>capital</span>
          <span>nairobi</span>
        </div>
        <div className='font-semibold flex items-center justify-between capitalize'>
          <span>subregion</span>
          <span>nairobi</span>
        </div>
        <div className='font-semibold flex items-center justify-between capitalize'>
          <span >language</span>
          <span>kiswahili</span>
        </div>
        <div className='font-semibold flex items-center justify-between capitalize'>
          <span>currencies</span>
          <span>kes</span>
        </div>
        <div className='font-semibold flex items-center justify-between capitalize'>
          <span>continents</span>
          <span>africa</span>
        </div>

      </div>
      <div>
        <h3 className='capitalize font-semibold'>neighbouring countries</h3>
        <NeighbourCountries />
      </div>
    </section>
  )
}

export default Info