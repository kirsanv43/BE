import React, { Component } from 'react';



const Table = ({ currency, data, loading, onRowClick }) => (
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
      </tr>
    </thead>
    <tbody>
      {loading
        ? <tr><td>Loading...</td></tr>
        : data.map(item => (
            <tr key={item.id} data-id={item.id} onClick={onRowClick}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.symbol}</td>
              <td>
                {currency}:{' '}
                {item.quotes[currency] && item.quotes[currency].market_cap}
              </td>
              <td>
                {currency}:{' '}
                {item.quotes[currency] && item.quotes[currency].price}
              </td>
              <td>{item.circulating_supply}</td>
              <td>
                {currency}:{' '}
                {item.quotes[currency] && item.quotes[currency].volume_24h}
              </td>
            </tr>
          ))}
    </tbody>
  </table>
);
export default Table;
