import { useContext, useRef } from 'react';
import './searchinput.css';
import { SearchCityContext } from '../../context/SearchCity';

export function SearchInput () {
  const { getCityCoords } = useContext(SearchCityContext);

  const handleClickCitySearch = (e) => {
    e.preventDefault();
    const data = new window.FormData(e.target);
    const search = data.get('search');

    getCityCoords({ search });
  };

  return (
    <div className='input-container'>
      <form onSubmit={handleClickCitySearch} className='input__form '>
        <input
          type='text'
          name='search'
          className='input__search shadow--box'
          placeholder='Venado Tuerto, Rosario, Cordoba...'
        />
        <button
          type='submit'
          className='search__button shadow--box'
        />
      </form>
    </div>
  );
}
