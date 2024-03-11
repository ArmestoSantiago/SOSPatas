import { useGetLocation } from './hooks/useGetLocation/useGetLocation';
import { Map } from './components/Map/Map.component';
import { NavigationOptions } from './components/NavigationOptions/Navigation.components';
import { SearchCityProvider } from './context/SearchCity';
import { AddLocationProvider } from './context/AddLocation';
import { AddLocationModal } from './components/AddLocationModal/AddLocationModal.component';

export function App () {
  const { location, error } = useGetLocation();

  return (
    <main>
      <SearchCityProvider>
        <AddLocationProvider>
          <AddLocationModal />
          <Map coords={location} error={error} />
          <NavigationOptions />
        </AddLocationProvider>
      </SearchCityProvider>
    </main>
  );
}
