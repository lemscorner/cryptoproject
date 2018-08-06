import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ccActions from "../../actions/cryptocompareActions";
import Select, { createFilter } from "react-select";
import GIFLoading from "../../images/loading.gif";

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      options: []
    };

    this.chooseCoin = this.chooseCoin.bind(this);
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
          label: newProps.cc.Coins[key].CoinName
        };

        items.push(item);
    });

      this.setState({options: items});
    }
  }

  chooseCoin(e) {
    console.log("Chosen coin");
  }

  render() {
    if(this.props.cc.fetching == "Started") {
      return (
        <div>
          <p>Please select a coin from the list (Fetching coin list from cryptocompare...)</p>
          <Select 
            isClearable
            isSearchable
            name="coins"
          />
        </div>
      );
    } else if(this.props.cc.fetching == "Done"){
      return (
        <div>
          <p>Please select a coin from the list (you can also type to search for a coin).</p>
          <Select 
            isClearable
            isSearchable
            name="coins"
            options={this.state.options}
            filterOption={createFilter(false, false, false, false)}
            onChange={this.chooseCoin}
          />
        </div>
      );
    } else {
      return(
        <div>
          <p>Please select a coin from the list (Fetching coin list from cryptocompare...)</p>
          <Select 
            isClearable
            isSearchable
            name="coins"
          />
        </div>
      );
    }

  }
}

function mapStateToProps(state, ownProps) {
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
  ccActions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);