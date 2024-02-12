import { FeaturesButtons } from './components/FeaturesButton/FeaturesButtons.component';
import { Map } from './components/Map/Map.component';
import { OptionsMenu } from './components/OptionsMenu/OptionsMenu.component';
import { SearchInput } from './components/SearchInput/SearchInput.component';

import { useGetLocation } from './hooks/useGetLocation/useGetLocation';

export function App () {
  const { location, error } = useGetLocation();
  console.log(location);

  return (
    <main />
  );
}
