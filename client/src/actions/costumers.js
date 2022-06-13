import {
  GETCUSTOMER,
  CREATECUSTOMER,
  UPDATECUSTOMER,
  DELETECUSTOMER,
} from "../constants/actionTypes";

export const costumers = (formData) => async (dispatch) => {
  console.log(formData, "formdata");
  try {
    dispatch({ type: GETCUSTOMER, payload: formData });
  } catch (error) {
    console.log(error);
  }
};
export const createCostumer = (formData) => async (dispatch) => {
  console.log(formData, "formdata");
  try {
    dispatch({ type: CREATECUSTOMER, payload: formData });
  } catch (error) {
    console.log(error);
  }
};
export const updateCostumer = (formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATECUSTOMER, payload: formData });
  } catch (error) {
    console.log(error);
  }
};
export const deleteCostumer = (formData) => async (dispatch) => {
  try {
    dispatch({ type: DELETECUSTOMER, payload: formData });
  } catch (error) {
    console.log(error);
  }
};
