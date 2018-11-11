import { connect } from 'react-redux';
import { createBook, updateBook } from '../../actions';
import Book from './book';
import { getBookById } from '../../selectors';
// export { default as Book} from './book'

export default connect(
  (state, props) => {
    const { id } = props.match.params;
    const data = {};
    if (id !== 'new') {
      data.isItEditMode = true;
      data.initialValues = getBookById(id);
    }

    return data;
  },
  {
    createBook,
    updateBook,
  }
)(Book);
