import { createContext, useContext, useEffect, useState } from "react";

const worldRanksContext = createContext()



function WorldRanksProvider({ children }) {
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
    return (
        <worldRanksContext.Provider value={{ query, handleQuery, selectedValue, handleSelectedValue, countries }}>{children}</worldRanksContext.Provider>
    )
}

function useWorldRanksApi() {
    const context = useContext(worldRanksContext)
    if (context === undefined) throw new Error("context was used used of the worldranks provider")
    return context
}

export { WorldRanksProvider, useWorldRanksApi }