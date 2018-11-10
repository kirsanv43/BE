import React from 'react';
import { mapQuotes } from './utils';

const Details = ({ currency }) => {
  const mapper = (currency, value) => (
    <div key={currency}>{`${value} ${currency}`}</div>
  );
  return (
    <table className="dataTable">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Market Cap</th>
          <th>Volume (24h)</th>
          <th>Circulating Supply</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{currency.rank}</td>
          <td>{mapQuotes(currency.quotes, 'market_cap', mapper)}</td>
          <td>{mapQuotes(currency.quotes, 'volume_24h', mapper)}</td>
          <td>{`${currency.circulating_supply} ${currency.symbol}`}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Details;
