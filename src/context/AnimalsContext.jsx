import { createContext, useState } from 'react';

export const AnimalContext = createContext();

export function AnimalContextProvider ({ children }) {
  const [lostAnimalsList, setLostAnimalsList] = useState([]);

  return (
    <AnimalContext.Provider value={{
      lostAnimalsList,
      setLostAnimalsList
    }}
    >
      {children}
    </AnimalContext.Provider>
  );
}
