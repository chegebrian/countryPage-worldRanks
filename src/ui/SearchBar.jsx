import React from 'react'
import { useWorldRanksApi } from '../contexts/WorldRanksApi'

function SearchBar() {
  const {query, handleQuery} = useWorldRanksApi();
  return (
    <div>
      <label htmlFor="search" className='cursor-pointer bg-[#282B30] flex items-center gap-4 rounded-lg p-2'>
        <img src="/images/Search.svg" alt="search-svg" />
        <input value={query} onChange={handleQuery} type="text" name="search" id="search" className='outline-0 text-[#D2D5DA]' placeholder='Search by Name or Region'/>
      </label>
    </div>
  )
}

export default SearchBar