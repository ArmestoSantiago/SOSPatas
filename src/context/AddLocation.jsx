import { createContext, useState } from 'react';

export const AddLocationContext = createContext();

export function AddLocationProvider ({ children }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <AddLocationContext.Provider value={{
      openModal,
      setOpenModal
    }}
    >
      {children}
    </AddLocationContext.Provider>
  );
}
