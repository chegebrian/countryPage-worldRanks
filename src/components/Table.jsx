import React from 'react'

function Table() {
    const tableColumns = [
        { header: "flag", accessor: "flag" },
        { header: "name", accessor: "name" },
        { header: "population", accessor: "population" },
        { header: "area(km²)", accessor: "area" },
        { header: "region", accessor: "region" },
    ];

    const tableData = [
        { id: 1, name: 'kenya', flag: "ke", population: 500, area: "nairobi", region: "thika" },
        { id: 1, name: 'kenya', flag: "ke", population: 500, area: "nairobi", region: "thika" },
        { id: 1, name: 'kenya', flag: "ke", population: 500, area: "nairobi", region: "thika" },
        { id: 1, name: 'kenya', flag: "ke", population: 500, area: "nairobi", region: "thika" },
        { id: 1, name: 'kenya', flag: "ke", population: 500, area: "nairobi", region: "thika" },
        { id: 1, name: 'kenya', flag: "ke", population: 500, area: "nairobi", region: "thika" },
        { id: 1, name: 'kenya', flag: "ke", population: 500, area: "nairobi", region: "thika" },
        { id: 1, name: 'kenya', flag: "ke", population: 500, area: "nairobi", region: "thika" },
        { id: 1, name: 'kenya', flag: "ke", population: 500, area: "nairobi", region: "thika" },
        { id: 1, name: 'kenya', flag: "ke", population: 500, area: "nairobi", region: "thika" },

    ];
    return (
        <table className='bg-[#1B1D1F] table-auto border-collapse col-span-3'>
            <thead>
                <tr className='text-[#D2D5DA] border-b-2 border-b-[#282B30] '>
                    {tableColumns?.map((column, index) => <th className='capitalize text-start' key={index}>{column.header}</th>)}
                </tr>
            </thead>
            <tbody>
                {tableData?.map((data, index) => <tr className='text-[#D2D5DA]' key={index}>
                    {tableColumns?.map((column, index) => <td key={index}>{
                        data[column.accessor]
                    }</td>)}
                </tr>)}
            </tbody>
        </table>
    )
}

export default Table