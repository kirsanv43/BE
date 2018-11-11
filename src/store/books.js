import { handleActions } from 'redux-actions';
import { createBook, updateBook, deleteBook, sort } from '../actions';
import { FIELDS_NAMES, SORT_METHODS } from '../constants';
import {
  generateGuid,
  sortSyncAndReturn,
  syncAndReturn,
  getSortMethod,
  syncWithStore
} from './utils';
import { sortFunctions } from '../helpers';

const INIT_DATA = JSON.parse(localStorage.getItem('books')) || {
  books: [],
  sortField: FIELDS_NAMES.TITLE,
  method: SORT_METHODS.ASC
};

const books = handleActions(
  {
    [createBook.toString()]: (state, action) => {
      const books = [...state.books];
      const book = action.payload;
      book.id = generateGuid();
      books.push(book);
      return sortSyncAndReturn(state, books);
    },
    [updateBook.toString()]: (state, action) => {
      const books = [...state.books];
      const newBook = action.payload;
      const bookIndex = books.findIndex(book => book.id === newBook.id);
      books[bookIndex] = newBook;
      return sortSyncAndReturn(state, books);
    },
    [deleteBook.toString()]: (state, action) => {
      const books = [...state.books];
      const id = action.payload;
      const bookIndex = state.books.findIndex(book => book.id === id);
      books.splice(bookIndex, 1);
      return syncAndReturn(state, books);
    },
    [sort.toString()]: (state, action) => {
      const books = [...state.books];
      const { name } = action.payload;
      const method = getSortMethod(state.method, state.sortField, name);
      const sortedBooks = sortFunctions[name](books, method);

      const newState = {
        books: sortedBooks,
        sortField: name,
        method: method
      };
      syncWithStore(newState);
      return newState;
    }
  },
  INIT_DATA
);

export default books;
