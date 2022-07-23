import {
  GETEMPLOYER,
  CREATEEMPLOYER,
  UPDATEEMPLOYER,
  DELETEEMPLOYER,
} from "../constants/actionTypes";

export const employers = (formData) => async (dispatch) => {
  console.log(formData, "formdata");
  try {
    dispatch({ type: GETEMPLOYER, payload: formData });
  } catch (error) {
    console.log(error);
  }
};
export const createEmployer = (formData) => async (dispatch) => {
  console.log(formData, "formdata");
  try {
    dispatch({ type: CREATEEMPLOYER, payload: formData });
  } catch (error) {
    console.log(error);
  }
};
export const updateEmployer = (formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATEEMPLOYER, payload: formData });
  } catch (error) {
    console.log(error);
  }
};
export const deleteEmployer = (formData) => async (dispatch) => {
  try {
    dispatch({ type: DELETEEMPLOYER, payload: formData });
  } catch (error) {
    console.log(error);
  }
};
