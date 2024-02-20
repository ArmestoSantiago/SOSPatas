import { createContext, useState } from 'react';

export const SearchCityContext = createContext();

export function SearchCityProvider ({ children }) {
  const WEATHER_APIKEY = import.meta.env.VITE_WEATHER_APIKEY;
  const APIURL = import.meta.env.VITE_WEATHER_API_REQUEST;
  const [cityCoords, setCityCoords] = useState(false);

  const getCityCoords = async ({ search }) => {
    try {
      const res = await fetch(`${APIURL}?q=${search}&appid=${WEATHER_APIKEY}`);

      const data = await res.json();

      const { lat, lon } = data[0];

      setCityCoords({ lat, lon });
    } catch (err) {
      // left error handling ()
    }
  };

  return (
    <SearchCityContext.Provider value={{
      getCityCoords,
      cityCoords
    }}
    >
      {children}
    </SearchCityContext.Provider>
  );
}
