import { connect } from 'react-redux';

import {
  deleteBook,
  sort,
  } from '../../actions';
import List from './list';



export default connect(
    state => ({
      data: state.books.books,
      method: state.books.method,
      sortField: state.books.sortField,
    }),
    {
      deleteBook,
      sort
    }
  )(List);