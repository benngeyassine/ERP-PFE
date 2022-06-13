import {
  GETPRODUCT,
  CREATEPRODUCT,
  UPDATEPRODUCT,
  DELETEPRODUCT,
} from "../constants/actionTypes";

export const products = (formData) => async (dispatch) => {
  console.log(formData, "formdata");
  try {
    dispatch({ type: GETPRODUCT, payload: formData });
  } catch (error) {
    console.log(error);
  }
};
export const createProduct = (formData) => async (dispatch) => {
  // console.log(formData, "formdata");
  try {
    dispatch({ type: CREATEPRODUCT, payload: formData });
  } catch (error) {
    console.log(error);
  }
};
export const updateProduct = (formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATEPRODUCT, payload: formData });
  } catch (error) {
    console.log(error);
  }
};
export const deleteProduct = (formData) => async (dispatch) => {
  try {
    dispatch({ type: DELETEPRODUCT, payload: formData });
  } catch (error) {
    console.log(error);
  }
};
