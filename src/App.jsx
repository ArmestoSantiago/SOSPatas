import { useGetLocation } from './hooks/useGetLocation/useGetLocation';
import { Map } from './components/Map/Map.component';
import { NavigationOptions } from './components/NavigationOptions/Navigation.components';
import { SearchCityProvider } from './context/SearchCity';
import { AddLocationProvider } from './context/CrossHairContext';
import { AddLocationModal } from './components/AddLocationModal/AddLocationModal.component';
import { useState } from 'react';
import { AnimalContextProvider } from './context/AnimalsContext';

export function App () {
  const { location, error } = useGetLocation();
  const [openModal, setOpenModal] = useState(false);

  return (
    <main>
      <SearchCityProvider>
        <AddLocationProvider>
          <AnimalContextProvider>
            <Map coords={location} error={error} openModal={openModal} setOpenModal={setOpenModal} />
            <NavigationOptions />
            {openModal && <AddLocationModal
              openModal={openModal}
              setOpenModal={setOpenModal}
                          />}
          </AnimalContextProvider>
        </AddLocationProvider>
      </SearchCityProvider>
    </main>
  );
}
