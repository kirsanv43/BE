import { combineReducers } from 'redux'
import books from './books'
import { reducer as form } from 'redux-form'

export default combineReducers({books, form})