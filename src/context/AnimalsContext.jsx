import { createContext, useState } from 'react';

export const AnimalContext = createContext();

export function AnimalContextProvider ({ children }) {
  const [animals, setAnimals] = useState([]);
  const [animalsLocation, setAnimalsLocation] = useState({});

  return (
    <AnimalContext.Provider value={{
      animals,
      setAnimals,
      animalsLocation,
      setAnimalsLocation
    }}
    >
      {children}
    </AnimalContext.Provider>
  );
}
