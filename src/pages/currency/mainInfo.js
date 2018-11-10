import React, { Component } from 'react';

const MainInfo = ({ currency }) => (
  <div>
    <img
      alt="currency info"
      src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${
        currency.id
      }.png`}
    />
    <span>{currency.name}</span>
    <span>({currency.symbol})</span>
  </div>
);
export default MainInfo;
