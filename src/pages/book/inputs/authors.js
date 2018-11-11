import React from 'react';
import { Error, DeleteAuthorButton } from '../styledTegs';
import { FirstName, SecondName } from '../fields';
import { Author } from '../styledTegs';

const renderAuthor = (member, index, fields) => (
  <Author key={index}>
    <FirstName member={member}/>
    <SecondName member={member}/>
    <DeleteAuthorButton
      type="button"
      title="Remove Member"
      onClick={() => fields.remove(index)}
    >
      Delete author above
    </DeleteAuthorButton>
  </Author>
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
