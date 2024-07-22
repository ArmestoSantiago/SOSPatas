import { useContext, useId } from 'react';
import './AddLocationModal.css';
import { AnimalContext } from '../../context/AnimalsContext';
import { getAddress } from '../../utils/useInverseGeocoding/getAddress';
import { getKey } from '../../utils/getKey';


export function AddLocationModal ({ openModal, setOpenModal }) {
  const animalTypeId = useId();
  const animalStateId = useId();
  const animalConditionId = useId();
  const descriptionId = useId();
  const imageId = useId();

  const { setLostAnimalsList } = useContext(AnimalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpenModal(false);

    const { lat, lng } = openModal.coords;

    const address = await getAddress(lat, lng);

    const fields = Object.fromEntries(new window.FormData(e.target));

    setLostAnimalsList(prevState => [
      ...prevState,
      {
        key: getKey(),
        location: openModal.coords,
        animalType: fields.animalType,
        condition: fields.condition,
        state: fields.state,
        description: fields.description,
        address
      }
    ]);
  };

  return (
    <div className='container-animal--form'>
      <p className='text'>Ayudemos a que cada animal tenga un hogar</p>
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className='input-data'>
            <label className='label-text' htmlFor={animalTypeId}>Tipo</label>
            <select id={animalTypeId} name='animalType' className='select-options'>
              <option value='dog'>Perro</option>
              <option value='cat'>Gato</option>
            </select>
          </div>
          <div className='input-data'>
            <label className='label-text' htmlFor={animalConditionId}>Estado</label>
            <select name='condition' id={animalConditionId} className='select-options'>
              <option value='healty'>Sano</option>
              <option value='hurt'>Herido</option>
              <option value='badly'>Urgente</option>
            </select>
          </div>
        </div>
        <div className='input-data'>
          <label className='label-text' htmlFor={animalStateId}>Estado</label>
          <select name='state' id={animalStateId} className='select-options'>
            <option value='street'>Callejero</option>
            <option value='lost'>Extraviado</option>
          </select>
        </div>
        <div className='img-file-box input-data'>
          <label htmlFor={imageId}>Sube una foto:</label>
          <input type='file' id={imageId} name='animalImage' accept='image/*' />
        </div>
        <div className='description-box'>
          <label htmlFor={descriptionId}>Describe algo del animal</label>
          <textarea maxLength="120" id={descriptionId} className='description-text' type='text' name='description' placeholder='color, comportamiento, raza, situación...' />
        </div>
        <div />
        <div type='submit' className='submit-btn '>
          <button type='submit' className='btn-grad'>AGREGAR</button>
        </div>
      </form>
    </div>
  );
}
