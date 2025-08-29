import { createContext, useContext } from "react";

const worldRanksContext = createContext()



function WorldRanksProvider({ children }) {
    return (
        <worldRanksContext.Provider value={{}}>{children}</worldRanksContext.Provider>
    )
}

function useWorldRanksApi() {
    const context = useContext(worldRanksContext)
    if (context === undefined) throw new Error("context was used used of the worldranks provider")
    return context
}

export { WorldRanksProvider, useWorldRanksApi }