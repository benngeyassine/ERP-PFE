import { combineReducers } from "redux";

import auth from "./auth";
import costumerReducers from "./customer";
import productReducers from "./product";
import employerReducers from "./employer";
import purchaseReducers from "./purchase";
export const reducers = combineReducers({
  auth,
  costumerReducers,
  productReducers,
  employerReducers,
  purchaseReducers,
});
