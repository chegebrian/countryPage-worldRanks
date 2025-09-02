import React from 'react'
import { useWorldRanksApi } from '../contexts/WorldRanksApi';

function Table() {
    const { countries, formatter, filteredCountries, sortedCountries } = useWorldRanksApi()

    const tableColumns = [
        { header: "flag", accessor: "flags" },
        { header: "name", accessor: "name" },
        { header: "population", accessor: "population" },
        { header: "area(km²)", accessor: "area" },
        { header: "region", accessor: "region" },
    ];

    return (
        <table className='bg-[#1B1D1F] table-auto border-separate border-spacing-y-4 col-span-3'>
            <thead>
                <tr className='text-[#D2D5DA]  '>
                    {tableColumns?.map((column, index) => <th className='capitalize text-start border-b-2 border-b-[#282B30]' key={index}>{column.header}</th>)}
                </tr>
            </thead>
            <tbody className=''>
                {sortedCountries?.map((country, index) => <tr className='text-[#D2D5DA]' key={index}>
                    <td className=''><img src={country.flags.svg} alt={country.flags.alt} className='rounded-md w-20' /></td>
                    <td>{country.name.common}</td>
                    <td>{formatter.format(country.population)}</td>
                    <td>{formatter.format(country.area)}</td>
                    <td>{country.region}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default Table