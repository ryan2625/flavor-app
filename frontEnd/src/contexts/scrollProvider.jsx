import { createContext, useState } from 'react'

export const ScrollContext = createContext(null);

export function ScrollContextProvider({ children }) {
    
    const [contextValue, setContextValue] = useState(false);
  
    const updateValue = (newValue) => {
      setContextValue(newValue);
    };
  
    return (
      <ScrollContext.Provider value={{ contextValue, updateValue }}>
        {children}
      </ScrollContext.Provider>
    );
  }