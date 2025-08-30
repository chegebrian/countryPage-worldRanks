import { createContext, useContext, useState } from "react";

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
    return (
        <worldRanksContext.Provider value={{ query, handleQuery, selectedValue, handleSelectedValue }}>{children}</worldRanksContext.Provider>
    )
}

function useWorldRanksApi() {
    const context = useContext(worldRanksContext)
    if (context === undefined) throw new Error("context was used used of the worldranks provider")
    return context
}

export { WorldRanksProvider, useWorldRanksApi }