import { useGetLocation } from './hooks/useGetLocation/useGetLocation';
import { Map } from './components/Map/Map.component';
import { NavigationOptions } from './components/NavigationOptions/Navigation.components';
import { SearchCityProvider } from './context/SearchCity';
import { AddLocationProvider } from './context/CrossHairContext';
import { AddLocationModal } from './components/AddLocationModal/AddLocationModal.component';
import { useState } from 'react';

export function App () {
  const { location, error } = useGetLocation();
  const [openModal, setOpenModal] = useState(false);

  return (
    <main>
      <SearchCityProvider>
        <AddLocationProvider>
          <Map coords={location} error={error} setOpenModal={setOpenModal} />
          <NavigationOptions />
          {openModal && <AddLocationModal
            openModal={openModal}
            setOpenModal={setOpenModal}
                        />}
        </AddLocationProvider>
      </SearchCityProvider>
    </main>
  );
}
