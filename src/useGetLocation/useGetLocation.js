import { useEffect, useState } from 'react';

export function useGetLocation() {
  const [location, setLocation] = useState([]);
  const [error, setError] = useState(null);

  const onSucces = (position) => {
    setLocation([position.coords.latitude, position.coords.longitude]);
  };

  const onError = () => {
    setError(true);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSucces, onError);
  }, []);

  return { location, error };
}
