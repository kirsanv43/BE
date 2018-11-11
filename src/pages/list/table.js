import React, { Component } from 'react';



const Table = ({ currency, data, loading, onRowClick, handleBookDelete }) => (
  <table className="dataTable">
    <thead>
      <tr>
        <th>title</th>
        <th>authors</th>
        <th>Pages count</th>
        <th>Publisher name</th>
        <th>Year of publication</th>
        <th>Release date</th>
        <th>ISBN</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {loading
        ? <tr><td>Loading...</td></tr>
        : data.map((item, index) => (
            <tr key={item.id} data-id={item.id} onClick={onRowClick}>
              <td>{item.title}</td>
              <td>{item.authors.map(author => <span>{`${author.firstName} ${author.lastName}`}</span>)}</td>
              <td>{item.pages}</td>
              <td>{item.publisher}</td>
              <td>{item.year}</td>
              <td>{item.releaseDate}</td>
              <td>{item.isbn}</td>
              <td><button data-id={item.id} onClick={handleBookDelete}>Delete</button></td>
            </tr>
          ))}
    </tbody>
  </table>
);
export default Table;
