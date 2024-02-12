
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow
} from '@vis.gl/react-google-maps';

import { useGetLocation } from './hooks/useGetLocation/useGetLocation';
import { useMemo } from 'react';

export function App () {
  const { location, error } = useGetLocation();
  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false
  }), []);

  return (
    <>
      {!error &&
        <APIProvider apiKey='AIzaSyBiBjfqdenY-yYtegC9pkMkqs777R8Ubb8'>
          <div style={{ height: '100vh' }}>
            <Map zoom={13} center={location} options={options} />
          </div>
        </APIProvider>}
    </>
  );
}
