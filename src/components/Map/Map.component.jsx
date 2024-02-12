import {
  APIProvider,
  Map as GoogleMap,
  AdvancedMarker,
  Pin,
  InfoWindow
} from '@vis.gl/react-google-maps';

import { useMemo } from 'react';
import './map.css';

export function Map ({ coordenates, error }) {
  if (error) return null;

  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false
  }), []);

  return (
    <APIProvider apiKey='AIzaSyBiBjfqdenY-yYtegC9pkMkqs777R8Ubb8'>
      <div style={{ height: '100vh' }}>
        <GoogleMap zoom={13} center={coordenates} options={options} />
      </div>
    </APIProvider>
  );
}
