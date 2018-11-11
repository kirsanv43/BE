import { connect } from 'react-redux';
import {
    fetchCurrencies,
    nextCurrencyPage,
    prevCurrencyPage,
    setConvertCurrecy
  } from '../../actions';
import List from './list';



export default connect(
    state => ({
      data: state.currencies.data
    }),
    {
      fetchCurrencies,
      nextCurrencyPage,
      prevCurrencyPage,
      setConvertCurrecy
    }
  )(List);