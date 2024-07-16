import { FiltersButton } from '../FiltersButton/FiltersButton';
import { SearchInput } from '../../SearchInput/SearchInput.component';
import './SearchAndFilters.css';

export function SearchAndFilters () {
  return (
    <div className='container-search-filters'>
      <SearchInput />
      <FiltersButton />
    </div>
  );
}
