import React, { useEffect, useState } from 'react'
import NeighbourCountries from '../components/NeighbourCountries'
import { useParams } from 'react-router'
import { useWorldRanksApi } from '../contexts/WorldRanksApi'

function Info() {
  const { countryName } = useParams()
  const { formatter } = useWorldRanksApi()
  const [detailedCountry, setDetailedCountry] = useState([])


  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        if (!response.ok) throw new Error("could not fetch detailed country data")
        let data = await response.json()
        setDetailedCountry(data)
      } catch (error) {
        console.error("failed", error);

      }
    }
    fetchData()
  }, [countryName])

  console.log(detailedCountry);

  return (
    <section className='p-4 bg-[#1B1D1F] text-[#D2D5DA]'>
      {detailedCountry?.map(({borders, name, population, area, capital, subregion, languages, continents, currencies, flags: { alt, svg } }, index) => <div key={index}>
        <div className='flex flex-col gap-4 items-center'>
          <img src={svg} alt={alt} className='w-60 rounded-lg' />
          <div className='text-center'>
            <h2 className='text-2xl font-bold capitalize'>{name.common}</h2>
            <p className='capitalize text-lg'>{name.official}</p>
          </div>
          <div className='flex items-center gap-6'>
            <div className='bg-[#282B30] py-2 px-4 rounded-md flex items-center gap-2 divide-x divide-[#1B1D1F]'>
              <span className='capitalize font-semibold pr-2'>population</span>
              <span>{formatter.format(population)}</span>
            </div>
            <div className='bg-[#282B30] py-2 px-4 rounded-md flex items-center gap-2 divide-x divide-[#1B1D1F]'>
              <span className='capitalize font-semibold pr-2'>area(km²)</span>
              <span>{formatter.format(area)}</span>
            </div>
          </div>
        </div>
        <div>
          <div className='font-semibold flex items-center justify-between capitalize'>
            <span>capital</span>
            <span>{capital}</span>
          </div>
          <div className='font-semibold flex items-center justify-between capitalize'>
            <span>subregion</span>
            <span>{subregion}</span>
          </div>
          <div className='font-semibold flex items-center justify-between capitalize'>
            <span >language</span>
            <span>{(Object.values(languages)).join(", ")}</span>
          </div>
          <div className='font-semibold flex items-center justify-between capitalize'>
            <span>currencies</span>
            <span>{Object.values(currencies)[0].name}</span>
          </div>
          <div className='font-semibold flex items-center justify-between capitalize'>
            <span>continents</span>
            <span>{continents}</span>
          </div>

        </div>
        <div>
          <h3 className='capitalize font-semibold'>neighbouring countries</h3>
          <div className='flex items-center gap-4'>
          {borders?.map((border,index) => <NeighbourCountries key={index} border={border}/>)}
          </div>
        </div>


      </div>)}
    </section>
  )
}

export default Info