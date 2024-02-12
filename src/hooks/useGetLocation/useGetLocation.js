import { useEffect, useState } from 'react';

export function useGetLocation() {
  const [location, setLocation] = useState([]);
  const [error, setError] = useState(true);

  const onSucces = (position) => {
    const coords = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    setLocation(coords);
    setError(false);
  };

  const onError = () => {
    setError(true);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSucces, onError);
  }, []);

  return { location, error };
}
