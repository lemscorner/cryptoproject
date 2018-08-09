import React from "react";
import PropTypes from "prop-types";
import * as urls from "../../constants/urlConstants";

const CoinInformation = ( {coin} ) => {
  let imgSrc = urls.cryptocompareBaseURL + coin.ImageUrl;
  let overview = urls.cryptocompareBaseURL + coin.Url;

  return (  
    <div className="row">
      <div className="coin-info-container col-xs-2">
        <img src={imgSrc} alt={coin.CoinName} />
      </div>
      <div className="col-xs-10">
        <h3>Coin Information</h3>
        <label className="label-field"><strong>Name: </strong>{coin.CoinName}</label>
        <label className="label-field"><strong>Symbol: </strong>{coin.Symbol}</label>
        <label className="label-field"><strong>Coin Overview: </strong><a href={overview}><strong>View at Cryptocompare</strong></a></label>
        <label className="label-field"><strong>Algorithm: </strong>{coin.Algorithm}</label>
        <label className="label-field"><strong>Total Coin Supply: </strong>{coin.TotalCoinSupply}</label>
      </div>
    </div>
  );
};

CoinInformation.propTypes = {
  coin: PropTypes.object.isRequired
}

export default CoinInformation;