import {
  GETPURCHASE,
  CREATEPURCHASE,
  UPDATEPURCHASE,
  DELETEPURCHASE,
} from "../constants/actionTypes";

export const purchases = (formData) => async (dispatch) => {
  console.log(formData, "formdata");
  try {
    dispatch({ type: GETPURCHASE, payload: formData });
  } catch (error) {
    console.log(error);
  }
};
export const createPurchase = (formData) => async (dispatch) => {
  // console.log(formData, "formdata");
  try {
    dispatch({ type: CREATEPURCHASE, payload: formData });
  } catch (error) {
    console.log(error);
  }
};
export const updatePurchase = (formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATEPURCHASE, payload: formData });
  } catch (error) {
    console.log(error);
  }
};
export const deletePurchase = (formData) => async (dispatch) => {
  try {
    dispatch({ type: DELETEPURCHASE, payload: formData });
  } catch (error) {
    console.log(error);
  }
};
