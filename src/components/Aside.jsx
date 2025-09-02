import React from 'react'
import { useWorldRanksApi } from '../contexts/WorldRanksApi'
import Button from '../ui/Button'

function Aside() {
    const { selectedValue, handleSelectedValue, selectedRegions } = useWorldRanksApi()
    return (
        <aside className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="sort" className='text-[#D2D5DA] font-bold'>Sort by</label>
                <select name="sort" id="sort" className='border text-[#D2D5DA] bg-[#1B1D1F] rounded-md py-0.5' value={selectedValue} onChange={handleSelectedValue}>
                    <option value="" disabled hidden>Select an option</option>
                    <option value="name-asc">Name(asc)</option>
                    <option value="name-desc">Name(desc)</option>
                    <option value="population-asc">Population(asc)</option>
                    <option value="population-desc">Population(desc)</option>
                    <option value="area-asc">Area(asc)</option>
                    <option value="area-desc">Area(desc)</option>
                    <option value="region-asc">Region(asc)</option>
                    <option value="region-desc">Region(desc)</option>
                </select>
            </div>
            <div>
                <p className='text-[#D2D5DA] font-bold mb-2'>Region</p>
                <div className='flex items-center gap-2 flex-wrap'>
                    {selectedRegions?.map((region, index) => <Button key={index}>{region}</Button>)}
                </div>

            </div>
            <div>
                <p className='text-[#D2D5DA] font-bold'>Status</p>
                <div>
                    <input type="checkbox" name="members of the united nations" id="united" className='text-[#D2D5DA]' />
                    <label htmlFor="united" className='text-[#D2D5DA] ml-2'>Members of the united nations</label>
                </div>
                <div>
                    <input type="checkbox" name="independent nations" id="independent" className='text-[#D2D5DA]' />
                    <label htmlFor="independent" className='text-[#D2D5DA] ml-2'>independent</label>
                </div>
            </div>
        </aside>
    )
}

export default Aside