import { AUTH } from "../constants/actionTypes";
// import * as api from "../api/index.js";
import axios from "axios";

export const signin = (formData) => async (dispatch) => {
  const url = "http://localhost:5000/user";

  try {
    axios({
      method: "post",
      url: url + "/signin",
      headers: {},
      data: {
        email: formData?.email,
        password: formData?.password, // This is the body part
      },
    })
      .then((res) => {
        console.log({ res });
        dispatch({ type: AUTH, payload: res?.data });
        // navigate("/home");
      })
      .catch((err) => {
        console.log({ err });
      });

    // Navigate();
  } catch (error) {
    console.log(error);
  }
};
