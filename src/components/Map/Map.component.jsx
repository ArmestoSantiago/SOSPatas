import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';

import './map.css';

export function Map ({ coordenates }) {
  if (coordenates.length === 0) return null;
  return (
    <MapContainer id='map' center={coordenates} zoom={14} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </MapContainer>
  );
}
