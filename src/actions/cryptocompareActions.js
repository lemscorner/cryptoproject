import * as types from "../types/actionTypes";
import CCAPI from "../api/cryptocompareAPI";
import * as log from "../helpers/toastrHelper";

export function getCoinListSuccess(result) {
  return { type: types.CC_COINLIST_SUCCESS, result };
}

export function getCoinListFail() {
  return { type: types.CC_COINLIST_FAIL };
}

export function getCoinListBegin() {
  return { type: types.CC_COINLIST_BEGIN };
}

export function getExchangeRateSuccess(result) {
  return { type: types.CC_GETPRICE_SUCCESS, result };
}

export function getExchangeRateBegin() {
  return { type: types.CC_GETPRICE_BEGIN };
}

export function getExchangeRateFail() {
  return { type: types.CC_GETPRICE_FAIL };
}

export function getCoinList() {
  return function(dispatch) {
    dispatch(getCoinListBegin());
    return CCAPI.getCoinList()
      .then(result => {
        log.toastOk("getCoinList OK", "Received data from cryptocompare!");
        dispatch(getCoinListSuccess(result));
      })
      .catch(message => {
        log.toastError("getCoinList Error", message);
        dispatch(getCoinListFail());
      });
  };
}

export function getExchangeRate(coin, currencies) {
  return function(dispatch) {
    dispatch(getExchangeRateBegin());
    return CCAPI.getExchangeRate(coin, currencies)
      .then(result => {
        log.toastOk("getExchangeRate OK", "Received data from cryptocompare!");
        dispatch(getExchangeRateSuccess(result));
      })
      .catch(message => {
        log.toastError("getExchangeRate Error", message);
        dispatch(getExchangeRateFail());
      })
  }
}