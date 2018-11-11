import { createAction } from 'redux-actions';

export const createBook = createAction('CREATE_BOOK')
export const updateBook = createAction('UPDATE_BOOK')
export const deleteBook = createAction('DELETE_BOOK')
export const sort = createAction('SORT_ROW')