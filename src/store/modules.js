import { combineReducers } from 'redux'
import currencies from './currencies'
import currency from './currency'
import { reducer as form } from 'redux-form'

export default combineReducers({currencies, currency, form})