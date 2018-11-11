import { FIELDS_NAMES, SORT_METHODS } from '../constants';

const year = FIELDS_NAMES.YEAR;
const title = FIELDS_NAMES.TITLE;

export const sortFunctions = {
  [FIELDS_NAMES.TITLE]: (array, sortMethod) => {
    const sortedArray = [...array]
    const direction = SORT_METHODS.ASC === sortMethod ? 1 : -1;
    return sortedArray.sort((a, b) => {
      return a[title].localeCompare(b[title]) * direction;
    });
  },
  [FIELDS_NAMES.YEAR]: (array, sortMethod) => {
    const sortedArray = [...array]
    const direction = SORT_METHODS.ASC === sortMethod ? 1 : -1;
    return sortedArray.sort((a, b) => {
      if (a[year] - b[year] === 0) {
        return 0;
      }
      return (a[year] - b[year]) * direction;
    });
  }
};
