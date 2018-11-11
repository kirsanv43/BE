import React, { Component } from 'react';
import styled from 'styled-components';
import { Field, FieldArray, reduxForm } from 'redux-form';
import CustomInput from './customInput';
import { FieldContainer } from './styledTegs';
import renderAuthors from './authors';
import ISBN from 'isbn-validate';
import ImageUploadInput from './imageUploadInput';

const BookForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const BookFormLayout = styled.div``;

class Book extends Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    // this.props.fetchCurrency({ id, currency });
  }

  componentWillUnmount() {
    this.props.resetCurrencyData();
  }

  handlePhotoUpload = e => {
    this.props.change('wefwef', e.target.files);
  };

  onSubmit = () => {};

  render() {
    const { handleSubmit } = this.props;
    console.log(handleSubmit);
    return (
      <BookFormLayout>
        <BookForm noValidate onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Title"
            width="200"
            name="title"
            component={CustomInput}
            type="text"
          />
          <FieldContainer>
            <label htmlFor="authors">Authors</label>
            <FieldArray name="authors" component={renderAuthors} />
          </FieldContainer>
          <Field
            label="Number of pages"
            width="200"
            name="pages"
            component={CustomInput}
            type="number"
            min="1"
            max="10000"
          />
          <Field
            label="Publisher name"
            width="200"
            name="publisher"
            component={CustomInput}
            maxLength="30"
            onKeyDown={() => {}}
            type="text"
          />
          <Field
            label="Year of publication"
            width="200"
            name="year"
            component={CustomInput}
            type="number"
            min="1800"
          />

          <Field
            label="Release date"
            width="200"
            name="releaseDate"
            component={CustomInput}
            type="date"
            min="1800-01-01"
          />

          <Field
            label="ISBN"
            width="200"
            name="isbn"
            component={CustomInput}
            type="text"
          />

          <Field
            label="Photo of book"
            width="200"
            name="photo"
            component={ImageUploadInput}
            type="file"
          />
          <button type="submit">Submit</button>
        </BookForm>
      </BookFormLayout>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 30) {
    errors.title = 'Must be 30 characters or less';
  }
  if (!values.authors || !values.authors.length) {
    errors.authors = { _error: 'Required' };
  } else {
    const authorsErrors = [];
    values.authors.forEach((author, index) => {
      const authorErrors = {};
      if (!author.firstName) {
        authorErrors.firstName = 'Required';
      }
      if (!author.lastName) {
        authorErrors.lastName = 'Required';
      }
      authorsErrors[index] = authorErrors;
    });
    errors.authors = authorsErrors;
  }

  if (values.pages) {
    const numPages = Number.parseInt(values.pages);
    if (numPages < 1 || numPages > 10000) {
      errors.pages = 'Number of pages must be more than 0 and less 10001';
    }
  } else {
    errors.pages = 'Required';
  }

  if (values.year) {
    const numYear = Number.parseInt(values.year);
    if (numYear < 1800) {
      errors.year = 'Year must be greater than or equal 1800';
    }
  }

  if (values.releaseDate) {
    const releaseDate = new Date(values.releaseDate);
    const fromLimit = new Date(1800, 1, 1);
    if (fromLimit > releaseDate) {
      errors.releaseDate = 'Release date must be 01/01/1800 or later';
    }
  }

  if (values.isbn) {
    if (!ISBN.Validate(values.isbn.replace(/\W/g, ''))) {
      errors.isbn = 'Enter valid isbn';
    }
  }

  return errors;
};

export default reduxForm({ form: 'book', validate })(Book);
