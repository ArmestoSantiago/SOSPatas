import { useEffect, useState } from 'react';

export function useGetLocation() {
  const [location, setLocation] = useState([]);
  const [error, setError] = useState(null);

  const onSucces = (position) => {
    const { latitude: lat } = position.coords;
    const { longitude: lng } = position.coords;
    setLocation([lat, lng]);
  };

  const onError = () => {
    setError(true);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSucces, onError);
  }, []);

  return { location, error };
}
