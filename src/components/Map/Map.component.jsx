import React, { useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import { MAP_OPTIONS } from './Map.option';
import { SearchCityContext } from '../../context/SearchCity';

const API_KEY = import.meta.env.VITE_GOOGLEMAP_APIKEY;

export function Map ({ coords, error }) {
  if (error) return;
  const { cityCoords } = useContext(SearchCityContext);

  const centerCoords = cityCoords !== false ? cityCoords : coords;

  console.log(centerCoords);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        center={centerCoords}
        options={MAP_OPTIONS}
        zoom={14}
      />
    </div>
  );
}
