import { LocationIcon } from '../icons/icons';

export function AnimalLocation ({ lat, lng }) {
  return (
    <div lat={lat} lng={lng}>
      <LocationIcon />
    </div>
  );
}
