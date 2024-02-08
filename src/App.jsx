import { Map } from './Map/Map';

import { useGetLocation } from './useGetLocation/useGetLocation';

export function App () {
  const { location, error } = useGetLocation();

  return (
    <>
      <p>SOS Patas</p>
      {location && <Map coordenates={location} />}
    </>
  );
}
