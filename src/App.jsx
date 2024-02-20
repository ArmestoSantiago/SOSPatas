import { useGetLocation } from './hooks/useGetLocation/useGetLocation';
import { Map } from './components/Map/Map.component';
import { NavigationOptions } from './components/NavigationOptions/Navigation.components';
import { SearchCityProvider } from './context/SearchCity';

export function App () {
  const { location, error } = useGetLocation();

  return (
    <main>
      <SearchCityProvider>
        <NavigationOptions />
        <Map coords={location} error={error} />
      </SearchCityProvider>
    </main>
  );
}
