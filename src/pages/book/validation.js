import ISBN from 'isbn-validate';
import { FIELDS_NAMES } from '../../constants';

const {
  TITLE: title,
  AUTHORS: authors,
  PAGES: pages,
  YEAR: year,
  RELEASEDATE: releasedate,
  ISBN: isbn
} = FIELDS_NAMES;

const validate = values => {
  const errors = {};
  if (!values[title]) {
    errors[title] = 'Required';
  } else if (values[title].length > 30) {
    errors[title] = 'Must be 30 characters or less';
  }
  if (!values[authors] || !values[authors].length) {
    errors[authors] = { _error: 'Required' };
  } else {
    const authorsErrors = [];
    values[authors].forEach((author, index) => {
      const authorErrors = {};
      if (!author.firstName) {
        authorErrors.firstName = 'Required';
      }
      if (!author.lastName) {
        authorErrors.lastName = 'Required';
      }
      authorsErrors[index] = authorErrors;
    });
    errors[authors] = authorsErrors;
  }

  if (values[pages]) {
    const numPages = Number.parseInt(values[pages]);
    if (numPages < 1 || numPages > 10000) {
      errors[pages] = 'Number of pages must be more than 0 and less 10001';
    }
  } else {
    errors[pages] = 'Required';
  }

  if (values[year]) {
    const numYear = Number.parseInt(values[year]);
    if (numYear < 1800) {
      errors[year] = 'Year must be greater than or equal 1800';
    }
  }

  if (values[releasedate]) {
    const releaseDate = new Date(values[releasedate]);
    const fromLimit = new Date(1800, 1, 1);
    if (fromLimit > releaseDate) {
      errors[releasedate] = 'Release date must be 01/01/1800 or later';
    }
  }

  if (values[isbn]) {
    if (!ISBN.Validate(values[isbn].replace(/\W/g, ''))) {
      errors[isbn] = 'Enter valid isbn';
    }
  }

  return errors;
};

export default validate;
