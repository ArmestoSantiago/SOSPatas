import { createContext, useState } from 'react';

export const AddLocationContext = createContext();

export function AddLocationProvider ({ children }) {
  const [crosshairCursor, setCrosshairCursor] = useState(false);

  return (
    <AddLocationContext.Provider value={{
      crosshairCursor,
      setCrosshairCursor
    }}
    >
      {children}
    </AddLocationContext.Provider>
  );
}
