export const mapQuotes = (quotes, key, mapper) =>
  quotes &&
  Object.keys(quotes).map(currency => mapper(currency, quotes[currency][key]));
