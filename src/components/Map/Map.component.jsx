import React, { useContext, useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { MAP_OPTIONS } from './Map.option';
import { SearchCityContext } from '../../context/SearchCity';
import { AddLocationContext } from '../../context/CrossHairContext';
import { AnimalContext } from '../../context/AnimalsContext';
import { AnimalLocation } from '../AnimalLocation/AnimalLocation';

const API_KEY = import.meta.env.VITE_GOOGLEMAP_APIKEY;

export function Map ({ coords, error, setOpenModal }) {
  if (error) return;
  const { crosshairCursor, setCrosshairCursor } = useContext(AddLocationContext);
  const { cityCoords } = useContext(SearchCityContext);
  const centerCoords = cityCoords || coords;

  const { setAnimalsLocation } = useContext(AnimalContext);
  const { animals } = useContext(AnimalContext);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setCrosshairCursor(false);
      }
    });
  }, []);

  const handleClick = (e) => {
    setAnimalsLocation({
      lat: e.lat,
      lng: e.lng
    });
    setOpenModal(true);
    setCrosshairCursor(false);
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        onClick={crosshairCursor ? handleClick : undefined}
        bootstrapURLKeys={{ key: API_KEY }}
        center={centerCoords}
        options={MAP_OPTIONS(crosshairCursor)}
        zoom={18}
      >
        {animals.map(({ location }, index) => {
          return <AnimalLocation key={index} lat={location.lat} lng={location.lng} />;
        })}
      </GoogleMapReact>

    </div>
  );
}
