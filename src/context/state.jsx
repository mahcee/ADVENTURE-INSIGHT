import { createContext, useState } from "react";

export const AdventureContext = createContext();

function AdventureContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
  return <AdventureContext.Provider value={{currentUser, setCurrentUser}}>{children}</AdventureContext.Provider>;
}

export default AdventureContextProvider;
