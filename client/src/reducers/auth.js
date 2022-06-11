import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducers = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      console.log({ action: action.payload });
      localStorage.setItem(
        "profile",
        JSON.stringify({ ...action?.payload?.result })
      );
      localStorage.setItem("token", JSON.stringify(action?.payload?.token));

      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};
export default authReducers;
