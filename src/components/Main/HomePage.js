import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { currencyOptions } from "../../constants/currencies";
import CoinSelect from "../Common/Selects/CoinSelect";
import EmptyCoinSelect from "../Common/Selects/EmptyCoinSelect";
import CurrencySelector from "../Common/Selects/CurrencyConverter";
import CoinInformation from "../CoinInformation/CoinInformation";
import ExchangeInformation from "../ExchangeInformation/ExchangeInformation";
import * as ccActions from "../../actions/cryptocompareActions";
import "../../styles/home.scss";

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      options: [],
      coin: {},
      conversionCurrencies: [],
      exchangeRates: {},
      labelString: "Please choose a coin and currency to use for conversion."
    };

    this.chooseCoin = this.chooseCoin.bind(this);
    this.chooseCurrencies = this.chooseCurrencies.bind(this);
    this.getCurrencyCollectionString = this.getCurrencyCollectionString.bind(this);
    this.getExchangeRate = this.getExchangeRate.bind(this);
  }

  componentDidMount() {
    if(this.props.cc.Coins.length == 0){
      this.props.ccActions.getCoinList();
    }
  }

  componentWillReceiveProps(newProps) {
    if(newProps.cc.Coins != this.props.cc.Coins) {
      let items = [];
      Object.keys(newProps.cc.Coins).forEach(function(key) {
        let item = {
          value: newProps.cc.Coins[key].Symbol,
          label: newProps.cc.Coins[key].CoinName,
          info: newProps.cc.Coins[key]
        };

        items.push(item);
      });

      this.setState({options: items});
    }

    if(newProps.cc.ExchangeRates != this.props.cc.ExchangeRates) {
      this.setState({exchangeRates: newProps.cc.ExchangeRates});
    }
  }

  chooseCoin(e) {
    this.setState(
      { coin: e.info },
      function() {
        this.getExchangeRate();
      });
  }

  chooseCurrencies(e) {
    let conversionCurrencies = [];

    e.forEach(function(currency) {
      conversionCurrencies.push(currency);
    })

    this.setState(
      { conversionCurrencies: conversionCurrencies },
      function() {
        this.getCurrencyCollectionString(this.state.conversionCurrencies);
        this.getExchangeRate();
      });
  }

  getCurrencyCollectionString(collection) {
    if(collection.length > 0) {
      let currString = "";

      collection.forEach(function(item, index) {
        if(index == 0) {
          currString += item.value
        } else if(index == collection.length -1) {
          currString += " & " + item.value + "."
        } else {
          currString += ", " + item.value
        }
      });
  
      let conversionString = "Converting " + this.state.coin.CoinName + " to the following currencies: " + currString;
  
      this.setState({labelString: conversionString});
    }
    else {
      let conversionString = "Please choose a coin and currency to use for conversion.";

      this.setState({labelString: conversionString});
    }
  }

  getExchangeRate() {
    let selectedCurrencies = this.state.conversionCurrencies;
    let selectedCoin = this.state.coin;
    let currencies = "";

    if(selectedCoin.Symbol && selectedCurrencies.length > 0) {
      
      selectedCurrencies.forEach(function(currency, index) {
        if(index == selectedCurrencies.length - 1) {
          currencies += currency.value
        } else {
          currencies += currency.value + ",";
        }
      });

      this.props.ccActions.getExchangeRate(selectedCoin.Symbol, currencies);
    }
  }

  render() {
    if(this.props.cc.fetching == "Started") {
      return (
        <div className="row">
          <EmptyCoinSelect label="Please select a coin from the list" />
          <CurrencySelector
            label="Please select currencies to use for conversion"
            options={currencyOptions}
            chooseCurrencies={this.chooseCurrencies}
          />
        </div>
      );
    } else if(this.props.cc.fetching == "Done"){
      return (
        <div>
          <div className="row selector-rows">
            <CoinSelect
              options={this.state.options}
              chooseCoin={this.chooseCoin}
              label="Please select a coin from the list"
            />  
            <CurrencySelector
              label="Please select currencies to use for conversion"
              options={currencyOptions}
              chooseCurrencies={this.chooseCurrencies}
            />
          </div>
          <div className="row">
            <div className="col">
              <label>{this.state.labelString}</label>
            </div>
          </div>
          <div className="row flex-container">
          {
            this.state.coin.CoinName && Object.keys(this.state.exchangeRates).length > 0 ?
            <div className="coin-exchange-container">
              <CoinInformation coin={this.state.coin} />
              <hr />
              <ExchangeInformation
                coin={this.state.coin}
                exchangeRates={this.state.exchangeRates}
              />
            </div> :
            <div></div>
          }
          </div>
        </div>
      );
    } else {
      return(
        <div className="row">
          <EmptyCoinSelect label="Please select a coin from the list" /> 
          <CurrencySelector
            label="Please select currencies to use for conversion"
            options={currencyOptions}
            chooseCurrencies={this.chooseCurrencies}
          />
        </div>
      );
    }

  }
}

function mapStateToProps(state) {
  return {
    cc: state.cryptoCompare
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ccActions: bindActionCreators(ccActions, dispatch)
  };
}

HomePage.propTypes = {
  ccActions: PropTypes.object.isRequired,
  cc: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);