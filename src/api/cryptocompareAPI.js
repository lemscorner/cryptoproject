import * as apiURL from "../constants/apiConstants";
import * as ccMethods from "../constants/ccEndpoints";
import "es6-promise";
import "isomorphic-fetch";
import * as helper from "../helpers/fetchErrorHandling";


class CCAPI {


  static getCoinList() {
    let url = apiURL.ccAPI + ccMethods.coinlist;

    return fetch(url)
      .then(helper.checkStatus)
      .then(helper.parseJSON);
  }

}

export default CCAPI;