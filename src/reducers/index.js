import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import cryptoCompare from "../reducers/cryptocompareReducer";

const rootReducer = combineReducers({
  cryptoCompare,
  routing: routerReducer
});

export default rootReducer;