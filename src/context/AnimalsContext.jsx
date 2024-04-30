import { createContext, useState } from 'react';

export const AnimalContext = createContext();

export function AnimalContextProvider ({ children }) {
  const [animals, setAnimals] = useState([]);

  return (
    <AnimalContext.Provider value={{
      animals,
      setAnimals
    }}
    >
      {children}
    </AnimalContext.Provider>
  );
}
