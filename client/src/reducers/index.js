import { combineReducers } from "redux";

import auth from "./auth";
import costumerReducers from "./customer";
import productReducers from "./product";

export const reducers = combineReducers({
  auth,
  costumerReducers,
  productReducers,
});
