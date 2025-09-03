import React from 'react'
import Button from '../ui/Button'
import Table from '../components/Table'
import SearchBar from '../ui/SearchBar'
import Aside from '../components/Aside'
import { useWorldRanksApi } from '../contexts/WorldRanksApi'

function CountryRanking() {
  const {sortedCountries} = useWorldRanksApi()

  return (
    <section className='p-4 bg-[#1B1D1F]'>
      <div className='flex items-center justify-between'>
        <p className='text-[#D2D5DA]'>found {sortedCountries?.length} countries</p>
        <SearchBar />
      </div>
      <div className='grid grid-cols-4 py-4 gap-4'>
        <Aside/>
        <Table />
      </div>
    </section>
  )
}

export default CountryRanking