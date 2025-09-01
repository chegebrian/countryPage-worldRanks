import { createContext, useContext, useEffect, useState } from "react";

const worldRanksContext = createContext()



function WorldRanksProvider({ children }) {
    const formatter = new Intl.NumberFormat("en-us")
    const [query, setQuery] = useState("")
    function handleQuery(e) {
        setQuery(e.target.value)
    }

    const [selectedValue, setSelectedValue] = useState("")
    function handleSelectedValue(e) {
        setSelectedValue(e.target.value)
    }

    const [countries, setCountries] = useState([])
    // console.log(countries);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,area,region,borders,capital,subregion,currencies,continents")
                if (!response.ok) throw new Error("failed to fetch countries data")
                const data = await response.json()
                setCountries(data)
            } catch (error) {
                console.error("fetch failed", error);

            }
        }
        fetchData()
    }, [])
    
    function handleFilteredCountries(query, countries) {
                
        // const x = countries?.filter((country) => country.region.toLowerCase() === query.toLowerCase()  || country.name.common.toLowerCase() === query.toLowerCase());
        // console.log(x);
        
        if (query) return countries?.filter((country) => country.region.toLowerCase() === query.toLowerCase()  || country.name.common.toLowerCase() === query.toLowerCase())
        if (!query) return countries
    }

    const filteredCountries = handleFilteredCountries(query, countries)
    

    return (
        <worldRanksContext.Provider value={{filteredCountries, query, handleQuery, selectedValue, handleSelectedValue, countries, formatter }}>{children}</worldRanksContext.Provider>
    )
}

function useWorldRanksApi() {
    const context = useContext(worldRanksContext)
    if (context === undefined) throw new Error("context was used used of the worldranks provider")
    return context
}

export { WorldRanksProvider, useWorldRanksApi }