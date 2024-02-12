import { useGetLocation } from './hooks/useGetLocation/useGetLocation';
import { FeaturesButtons } from './components/FeaturesButton/FeaturesButtons.component';
import { Map } from './components/Map/Map.component';
import { OptionsMenu } from './components/OptionsMenu/OptionsMenu.component';
import { SearchInput } from './components/SearchInput/SearchInput.component';

export function App () {
  const { location, error } = useGetLocation();

  return (
    <main>
      <SearchInput />
      <FeaturesButtons />
      <OptionsMenu />
      <Map coordenates={location} error={error} />
    </main>
  );
}
