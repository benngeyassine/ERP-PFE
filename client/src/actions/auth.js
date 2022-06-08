import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const sigin = (formData, Navigate) => async (dispatch) => {
  try {
    Navigate();
  } catch (error) {
    console.log(error);
  }
};
