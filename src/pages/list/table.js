import React from 'react';
import { Author, SortableHeader, Table, Row, Cell } from './styledTegs';
import { FIELDS_NAMES } from '../../constants';

const putComma = (index, authors) => {
  if (authors.length === 1) {
    return false;
  }

  if (authors.length - 1 !== index) {
    return true;
  }
};

const authors = (author, index, authors) => (
  <Author key={author.firstName + author.lastName}>
    {`${author.firstName} ${author.lastName}${
      putComma(index, authors) ? ',' : ''
    }`}
  </Author>
);

const getSortMethod = (fieldName, sortField, method) => {
  if (fieldName !== sortField) {
    return null;
  }

  return `(${method.toLowerCase()})`;
};

const TableComponent = ({
  currency,
  data,
  loading,
  handleRowClick,
  handleBookDelete,
  handleSort,
  method,
  sortField
}) => (
  <Table>
    <thead>
      <tr>
        <SortableHeader onClick={handleSort} data-active={sortField === FIELDS_NAMES.TITLE} data-name={FIELDS_NAMES.TITLE}>
          Title {getSortMethod(FIELDS_NAMES.TITLE, sortField, method)}
        </SortableHeader>
        <th>Authors</th>
        <th>Pages count</th>
        <th>Publisher name</th>
        <SortableHeader onClick={handleSort} data-active={sortField === FIELDS_NAMES.YEAR} data-name={FIELDS_NAMES.YEAR}>
          Year of publication{' '}
          {getSortMethod(FIELDS_NAMES.YEAR, sortField, method)}
        </SortableHeader>
        <th>Release date</th>
        <th>ISBN</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {data && data.map((item, index) => (
          <Row key={item.id} data-id={item.id} onClick={handleRowClick}>
            <Cell>{item.title}</Cell>
            <Cell>{item.authors.map(authors)}</Cell>
            <Cell>{item.pages}</Cell>
            <Cell>{item.publisher}</Cell>
            <Cell>{item.year}</Cell>
            <Cell>{item.releaseDate}</Cell>
            <Cell>{item.isbn}</Cell>
            <Cell>
              <button data-id={item.id} onClick={handleBookDelete}>
                Delete
              </button>
            </Cell>
          </Row>
        ))}
    </tbody>
  </Table>
);
export default TableComponent;
