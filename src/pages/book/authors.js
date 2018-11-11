import React from 'react';
import styled from 'styled-components';
import { FieldContainer, Error } from './styledTegs';
import { Field } from 'redux-form';
import CustomInput from './customInput';

const renderAuthor = (member, index, fields) => (
  <li key={index}>
    <Field
      label="First name"
      name={`${member}.firstName`}
      type="text"
      component={CustomInput}
      width={160}
      maxLength="20"
    />
    <Field
      label="Last name"
      name={`${member}.lastName`}
      type="text"
      component={CustomInput}
      width={160}
      maxLength="20"
    />
    <button
      type="button"
      title="Remove Member"
      onClick={() => fields.remove(index)}
    >
      x
    </button>
  </li>
);

const renderAuthors = ({ fields, meta: { error, submitFailed } }) => {
  return (
    <div>
      <button type="button" onClick={() => fields.push({})}>
        Add Author
      </button>
      {submitFailed && error && <Error>{error}</Error>}
      <ul>{fields.map(renderAuthor)}</ul>
    </div>
  );
};

export default renderAuthors;
