import React from "react";
import PropTypes from "prop-types";

const ExchangeRate = ( {coin, exchangeRate, symbol} ) => {
  return (
    <label className="label-field">
      <strong>{"1 " + coin.CoinName}</strong> is equal to <strong>{exchangeRate + " (" + symbol + ")"}</strong>
    </label>  
  );
};

ExchangeRate.propTypes = {
  coin: PropTypes.object.isRequired,
  exchangeRate: PropTypes.number,
  symbol: PropTypes.string
}

export default ExchangeRate;