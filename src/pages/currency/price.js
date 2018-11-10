import React, { Component } from 'react';

const Price = ({ currency }) => {
  const { quotes } = currency;


  return (
    <div>
      {quotes && Object.keys(quotes).map(key => (
        <div key={key}>
          {quotes[key].price}
          <span>{key}</span>
          <span>({quotes[key].percent_change_7d})</span>
        </div>
      ))}
    </div>
  );
};
export default Price;
