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

    const [checkedMembers, setCheckedMembers] = useState(false)

    function handleCheckedMembers() {
        setCheckedMembers(checkedMembers => !checkedMembers)
    }
    const [checkedIndependent, setCheckedIndependent] = useState(false)

    function handleCheckedIndependent() {
        setCheckedIndependent(checkedIndependent => !checkedIndependent)
    }

    const [selectedCategory, setSelectedCategory] = useState("all")

    function handleSelectedRegion(e) {
        setSelectedCategory(e.target.value)
    }

    const [countries, setCountries] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,area,region,borders,independent,subregion,currencies,cca3")
                if (!response.ok) throw new Error("failed to fetch countries data")
                const data = await response.json()
                setCountries(data)
            } catch (error) {
                console.error("fetch failed", error);

            }
        }
        fetchData()
    }, [])

    function handleFilteredCountries(query, countries, checkedMembers, checkedIndependent, selectedCategory) {

        let filteredItems = countries;

        if (query) filteredItems = countries?.filter((country) => country.region.toLowerCase().includes(query.toLowerCase()) || country.name.common.toLowerCase().includes(query.toLowerCase()))
        if (selectedCategory !== "all") filteredItems = filteredItems?.filter((filterItem) => filterItem.region === selectedCategory)
        if (checkedMembers) filteredItems = filteredItems?.filter((country) => country.independent === true)
        if (checkedIndependent) filteredItems = filteredItems?.filter((country) => country.independent === false)
        if (checkedMembers && checkedIndependent) filteredItems = countries;
        
        return filteredItems;

    }

    const filteredCountries = handleFilteredCountries(query, countries, checkedMembers, checkedIndependent, selectedCategory)

    const regions = filteredCountries?.map((filteredCountry) => filteredCountry.region)
    

    const selectedRegions = [...new Set(regions)]
    

    function handleSort(filteredCountries) {
        
        let oufilteredCountries = filteredCountries
        if (!selectedValue) return oufilteredCountries;

        //  sort by name
        if (selectedValue === "name-asc") {
            return oufilteredCountries.toSorted((a, b) => a.name.common.localeCompare(b.name.common));
        }
        if (selectedValue === "name-desc") {
            return oufilteredCountries.toSorted((a, b) => b.name.common.localeCompare(a.name.common));
        }

        // sort by region

        if (selectedValue === "region-asc") {
            return oufilteredCountries.toSorted((a, b) => a.region.localeCompare(b.region));
        }
        if (selectedValue === "region-desc") {
            return oufilteredCountries.toSorted((a, b) => b.region.localeCompare(a.region));
        }

        // sort by population

        if (selectedValue === "population-asc") {
            return oufilteredCountries.toSorted((a, b) => a.population - b.population);
        }
        if (selectedValue === "population-desc") {
            return oufilteredCountries.toSorted((a, b) => b.population - a.population);
        }

        // sort by area

        if (selectedValue === "area-asc") {
            return oufilteredCountries.toSorted((a, b) => a.area - b.area);
        }
        if (selectedValue === "area-desc") {
            return oufilteredCountries.toSorted((a, b) => b.area - a.area);
        }


    }



    const sortedCountries = handleSort(filteredCountries)

    return (
        <worldRanksContext.Provider value={{ handleSelectedRegion, checkedIndependent, handleCheckedIndependent, checkedMembers, handleCheckedMembers, filteredCountries, sortedCountries, query, selectedRegions, handleQuery, selectedValue, handleSelectedValue, countries, formatter }}>{children}</worldRanksContext.Provider>
    )
}

function useWorldRanksApi() {
    const context = useContext(worldRanksContext)
    if (context === undefined) throw new Error("context was used used of the worldranks provider")
    return context
}

export { WorldRanksProvider, useWorldRanksApi }