import { connect } from 'react-redux';
import { fetchCurrency, resetCurrencyData } from '../../actions';
import Book from './book';
// export { default as Book} from './book'



export default connect(
    state => ({
      currency: state.currency.data
    }),
    {
      fetchCurrency,
      resetCurrencyData
    }
  )(Book);