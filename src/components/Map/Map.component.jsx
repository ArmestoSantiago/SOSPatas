import React from 'react';
import GoogleMapReact as GoogleMap from 'google-map-react';

const API_KEY = import.meta.env.VITE_GOOGLEMAP_APIKEY;

export function Map ({ coords, error }) {
  if (error) return;

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMap
        bootstrapURLKeys={{ key: API_KEY }}
        center={coords}
        zoom={14}
      />
    </div>
  );
}
