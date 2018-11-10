import { handleActions } from 'redux-actions';
import {
  setConvertCurrecy,
  setScrollerData,
  nextCurrencyPage,
  prevCurrencyPage,
  fetchCurrencies
} from '../actions';
import { DEFAULT_CURRENCY } from '../constants';

const currencies = handleActions(
  {
    [fetchCurrencies.toString()]: (state, action) => {
      return {
        ...state, loading: true
      };
    },
    [setScrollerData.toString()]: (state, action) => {
      const { data, metadata } = action.payload;
      return {
        ...state,
        data,
        total: metadata.num_cryptocurrencies, loading: false
      };
    },
    [nextCurrencyPage.toString()]: (state, action) => {
      const page = state.page + 1;
      return { ...state, page, loading: true };
    },
    [prevCurrencyPage.toString()]: (state, action) => {
      const page = state.page - 1;
      return { ...state, page, loading: true };
    },
    [setConvertCurrecy.toString()]: (state, action) => {
      const currency = action.payload;
      return { ...state, currency, loading: true };
    }

    
  },
  { data: [], page: 0, perPage: 100, total: 0, currency: DEFAULT_CURRENCY }
);

export default currencies;
