import React, { Component } from 'react';

const Table = ({ currency, data, loading, onRowClick }) => (
  <table className="dataTable">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Symbol</th>
        <th>Market Cap</th>
        <th>Price</th>
        <th>Circulating Supply</th>
        <th>Volume (24h)</th>
        <th>% 1h</th>
        <th>% 24h</th>
        <th>% 7d</th>
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
              <td>
                {item.quotes[currency] &&
                  item.quotes[currency].percent_change_1h}
                %
              </td>
              <td>
                {item.quotes[currency] &&
                  item.quotes[currency].percent_change_24h}
                %
              </td>
              <td>
                {item.quotes[currency] &&
                  item.quotes[currency].percent_change_7d}
                %
              </td>
            </tr>
          ))}
    </tbody>
  </table>
);
export default Table;
