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
        console.log(message);
      });
  };
}