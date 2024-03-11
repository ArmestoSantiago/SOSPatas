
import { useContext } from 'react';
import { AddAnimalLocationIcon } from '../icons/icons';
import './FeaturesButton.css';
import { AddLocationContext } from '../../context/AddLocation';

export function FeaturesButtons () {
  return (
    <div className='buttons-container'>
      <RedirectLocationButton />
      <AddNewLocatedAnimal />
    </div>
  );
}

export function RedirectLocationButton () {
  return (
    <button className='features__button redirect-location__button shadow--box' />
  );
}

export function AddNewLocatedAnimal () {
  const { setOpenModal } = useContext(AddLocationContext);

  const handleClick = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };
  return (
    <button
      className='features__button main__button shadow--box'
      onClick={handleClick}
    >
      <AddAnimalLocationIcon />
    </button>
  );
}
