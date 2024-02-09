import './searchinput.css';

export function SearchInput () {
  return (
    <div className='input-container'>
      <form className='input__form'>
        <input
          id='search'
          className='input__search'
          placeholder='Venado Tuerto, Rosario, Cordoba...'
        />
        <button
          id='search'
          // onClick={handleClick}
          className='search__button'
        />
      </form>
    </div>
  );
}
