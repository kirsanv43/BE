export const fetchCurrencies = (page, currency, limit = 100) =>
  fetch(
    `https://api.coinmarketcap.com/v2/ticker/?start=${1 +
      (page * limit || -1)}&convert=${currency}&structure=array`
  );

export const fetchCurrency = (id, currency) =>
  fetch(`https://api.coinmarketcap.com/v2/ticker/${id}/?convert=${currency}`);
