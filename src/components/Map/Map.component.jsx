import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MAP_OPTIONS } from './Map.option';

const API_KEY = import.meta.env.VITE_GOOGLEMAP_APIKEY;

export function Map ({ coords, error }) {
  if (error) return;

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        center={coords}
        options={MAP_OPTIONS}
        zoom={14}
      />
    </div>
  );
}
