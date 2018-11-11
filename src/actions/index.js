import { createAction } from 'redux-actions';

export const createBook = createAction('CREATE_BOOK')
export const updateBook = createAction('UPDATE_BOOK')
export const deleteBook = createAction('DELETE_BOOK')



export const fetchCurrencies = createAction('FETCH_CURRENCIES')
export const nextCurrencyPage = createAction('NEXT_CURRENCY_PAGE')
export const prevCurrencyPage = createAction('PREV_CURRENCY_PAGE')

export const setConvertCurrecy = createAction('SET_CONVERT_CURRENCY')
export const changeCurrency = createAction('CHANGE_CURRENCY')
export const setScrollerData = createAction('SET_SCROLLER_DATA')
export const fetchCurrencyError = createAction('FETCH_CURRENCY_ERROR')

export const fetchCurrency = createAction('FETCH_CURRENCY')
export const setCurrencyData = createAction('SET_CURRENCY_DATA')
export const resetCurrencyData = createAction('RESET_CURRENCY_DATA')