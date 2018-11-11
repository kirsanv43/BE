import { SORT_METHODS } from "../constants";
const {ASC, DESC} = SORT_METHODS
export function generateGuid() {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    );
  }

  export const syncWithStore = store => {
    localStorage.setItem('books', JSON.stringify(store));
  };

  export const syncAndReturn = (state, books) => {
    const newState = {
      ...state,
      books
    };
  
    syncWithStore(newState);
  
    return newState;
  };

export const getSortMethod = (currentDirection, currentField, newField) => {
  if (currentField !== newField) {
    return ASC
  }

  return currentDirection === ASC ? DESC : ASC
}