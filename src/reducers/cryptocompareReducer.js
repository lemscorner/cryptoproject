import * as types from "../types/actionTypes";
import Immutable from "seamless-immutable";
import * as log from "../helpers/toastrHelper";

const initState = Immutable({
  Coins: [],
  loading: false,
  error: false,
  fetching: "Not Started"
});

export default function cryptocompareReducer(state = initState, action = {}) {
  switch (action.type) {
    case types.CC_COINLIST_BEGIN:
    {
      log.toastInfo("Please wait.", "Pulling data from cryptocompare...")
      return state.merge({
        loading: true,
        fetching: "Started"
      });
    }

    case types.CC_COINLIST_FAIL: {
      return state.merge({
        loading: false,
        fetching: "Failed",
        error: true
      });
    }

    case types.CC_COINLIST_SUCCESS: {
      return state.merge({
        Coins: action.result.Data,
        loading: false,
        fetching: "Done"
      });
    }

    default:
      return state;
  }
}