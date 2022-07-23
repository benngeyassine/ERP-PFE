import {
  GETEMPLOYER,
  CREATEEMPLOYER,
  UPDATEEMPLOYER,
  DELETEEMPLOYER,
} from "../constants/actionTypes";
const employerReducers = (state = { employers: [] }, action) => {
  switch (action.type) {
    case GETEMPLOYER:
      return { ...state, employers: action?.payload };
    case CREATEEMPLOYER:
      return {
        ...state,
        employers: [...state.employers, action?.payload],
      };
    case UPDATEEMPLOYER:
      const objIndex = state.employers.findIndex(
        (obj) => obj._id === action?.payload._id
      );

      const updated = (state.employers[objIndex] = action?.payload);
      console.log(updated);
      return {
        ...state,
        employers: state.employers,
      };

    case DELETEEMPLOYER:
      const deleted = state.employers.filter(
        (item) => item._id !== action?.payload._id
      );
      console.log({ deleted });
      return {
        ...state,
        employers: deleted,
      };
    default:
      return state;
  }
};
export default employerReducers;
