import { handleActions } from 'redux-actions';
import {
  setCurrencyData,
  resetCurrencyData,
} from '../actions';

const INIT_DATA = { data: {} }

const currencies = handleActions(
  {
    [setCurrencyData.toString()]: (state, action) => {
      const { data } = action.payload;
      debugger
      return {
        ...state,
        data,
      };
    },
    [resetCurrencyData.toString()]: () => {
      return INIT_DATA;
    }, 
  },
  INIT_DATA
);

export default currencies;
