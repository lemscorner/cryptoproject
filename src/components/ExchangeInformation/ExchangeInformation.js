import React from "react";
import PropTypes from "prop-types";
import ExchangeRate from "./ExchangeRate";

const ExchangeInformation = ( {coin, exchangeRates} ) => {
  return (
    <div className="exchange-rate">
      <h3>Current Exchange Rates</h3>
          {
            Object.keys(exchangeRates).map(function(key, index) {
              return (
                <div key={index}>
                  <ExchangeRate
                    coin={coin}
                    exchangeRate={exchangeRates[key]}
                    symbol={key}
                  />
                </div>)
              ;
            })
          }
    </div>    
  );
};

ExchangeInformation.propTypes = {
  coin: PropTypes.object.isRequired,
  exchangeRates: PropTypes.object
}

export default ExchangeInformation;