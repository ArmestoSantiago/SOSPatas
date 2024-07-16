import { SearchInput } from '../SearchInput/SearchInput.component';
import { FeaturesButtons } from './FeaturesButton/FeaturesButtons.component';
import { OptionsMenu } from "./OptionsMenu/OptionsMenu.component"
import { SearchAndFilters } from './SearchAndFilters/SearchAndFilters';


export function NavigationOptions () {
  return (
    <>
      <div>
        <SearchAndFilters />
      </div>
      <FeaturesButtons />
      <OptionsMenu />
    </>
  );
}
