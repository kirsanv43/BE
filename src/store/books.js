import { handleActions } from 'redux-actions';
import {
  createBook,
  updateBook,
  deleteBook,
} from '../actions';

function generateGuid() {
  return Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
}

const syncWithStore = (books) => {
  localStorage.setItem('books', JSON.stringify(books))
}

const INIT_DATA = { books: JSON.parse(localStorage.getItem('books')) || [] }

const currencies = handleActions(
  {
    [createBook.toString()]: (state, action) => {
      const books = [...state.books]
      const book = action.payload
      book.id = generateGuid()
      books.push(book)
      syncWithStore(books)
      return {
        ...state,
        books,
      };
    },
    [updateBook.toString()]: (state, action) => {
      const books = [...state.books]
      const newBook = action.payload
      const bookIndex = books.indexOf(book => book.id === newBook.id)
      books[bookIndex] = newBook
      syncWithStore(books)
      return {
        ...state,
        books,
      };
    },
    [deleteBook.toString()]: (state, action) => { 
      debugger
      const books = [...state.books]
      const id = action.payload
      const bookIndex = state.books.findIndex(book => book.id === id)
      books.splice(bookIndex, 1) 
      syncWithStore(books)
      return {
        ...state,
        books,
      };
    },
    
  },
  INIT_DATA
);

export default currencies;
