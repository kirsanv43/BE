import { connect } from 'react-redux';

import {
  deleteBook
  } from '../../actions';
import List from './list';



export default connect(
    state => ({
      data: state.books.books
    }),
    {
      deleteBook
    }
  )(List);