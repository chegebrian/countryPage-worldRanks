import React from 'react'
import { useWorldRanksApi } from '../contexts/WorldRanksApi'
import Button from '../ui/Button'

function Aside() {
    const { selectedValue, handleSelectedValue } = useWorldRanksApi()
    return (
        <aside className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="sort" className='text-[#D2D5DA] font-bold'>Sort by</label>
                <select name="sort" id="sort" className='border text-[#D2D5DA] rounded-md py-0.5' value={selectedValue} onChange={handleSelectedValue}>
                    <option value="" disabled hidden>Select an option</option>
                    <option value="option1">option 1</option>
                    <option value="option2">option 2</option>
                    <option value="option3">option 3</option>
                </select>
            </div>
            <div>
                <p className='text-[#D2D5DA] font-bold'>Region</p>
                <Button>america</Button>
                <Button>africa</Button>
                <Button>asia</Button>
                <Button>australia</Button>
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