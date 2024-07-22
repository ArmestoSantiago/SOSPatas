import { SearchInput } from '../SearchInput/SearchInput.component';
import { FeaturesButtons } from './FeaturesButton/FeaturesButtons.component';
import { OptionsMenu } from "./OptionsMenu/OptionsMenu.component"
import { SearchAndFilters } from './SearchAndFilters/SearchAndFilters';
import { AnimalList } from "./ListOfAnimals/ListOfAnimals"


export function NavigationOptions () {
  return (
    <>
      <div>
        <SearchAndFilters />
      </div>
      <AnimalList />
      <FeaturesButtons />
      <OptionsMenu />
    </>
  );
}
