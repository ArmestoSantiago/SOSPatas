import { useGetLocation } from './hooks/useGetLocation/useGetLocation';
import { Map } from './components/Map/Map.component';
import { NavigationOptions } from './components/NavigationOptions/Navigation.components';

export function App () {
  const { location, error } = useGetLocation();

  return (
    <main>
      <NavigationOptions />
      <Map coords={location} error={error} />
    </main>
  );
}
