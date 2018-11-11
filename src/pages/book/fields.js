import React from 'react';
import { Field, FieldArray } from 'redux-form';
import CustomInput from './customInput';
import { FieldContainer } from './styledTegs';
import renderAuthors from './authors';
import ImageUploadInput from './imageUploadInput';
import { FIELDS_NAMES } from '../../constants';

export const Title = props => (
  <Field
    label="Title"
    width="200"
    name={FIELDS_NAMES.TITLE}
    maxLength="30"
    component={CustomInput}
    type="text"
    {...props}
  />
);

export const Authors = () => (
  <FieldContainer>
    <label htmlFor={FIELDS_NAMES.AUTHORS}>Authors</label>
    <FieldArray name={FIELDS_NAMES.AUTHORS} component={renderAuthors} />
  </FieldContainer>
);

export const NumberOfPages = props => (
  <Field
    label="Number of pages"
    width="200"
    name={FIELDS_NAMES.PAGES}
    component={CustomInput}
    type="number"
    min="1"
    max="10000"
    {...props}
  />
);

export const PublisherName = props => (
  <Field
    label="Publisher name"
    width="200"
    name={FIELDS_NAMES.PUBLISHER}
    component={CustomInput}
    maxLength="30"
    onKeyDown={() => {}}
    type="text"
    {...props}
  />
);

export const YearOfPublication = props => (
  <Field
    label="Year of publication"
    width="200"
    name={FIELDS_NAMES.YEAR}
    component={CustomInput}
    type="number"
    min="1800"
    {...props}
  />
);

export const ReleaseDate = props => (
  <Field
    label="Release date"
    width="200"
    name={FIELDS_NAMES.RELEASEDATE}
    component={CustomInput}
    type="date"
    min="1800-01-01"
    {...props}
  />
);

export const ISBN = props => (
  <Field
    label="ISBN"
    width="200"
    name={FIELDS_NAMES.ISBN}
    component={CustomInput}
    type="text"
    {...props}
  />
);

export const PhotoOfBook = props => (
  <Field
    label="Photo of book"
    width="200"
    name={FIELDS_NAMES.PHOTO}
    component={ImageUploadInput}
    type="file"
    {...props}
  />
);

export const FirstName = props => (
  <Field
    label="First name"
    name={`${props.member}.firstName`}
    type="text"
    component={CustomInput}
    width={160}
    maxLength="20"
    {...props}
  />
);

export const SecondName = props => (
  <Field
    label="Last name"
    name={`${props.member}.lastName`}
    type="text"
    component={CustomInput}
    width={160}
    maxLength="20"
    {...props}
  />
);
