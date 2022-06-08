import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducers = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      console.log(action?.data);
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};
export default authReducers;
