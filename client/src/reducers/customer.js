import {
  GETCUSTOMER,
  CREATECUSTOMER,
  UPDATECUSTOMER,
  DELETECUSTOMER,
} from "../constants/actionTypes";
const costumerReducers = (state = { costumers: [] }, action) => {
  switch (action.type) {
    case GETCUSTOMER:
      return { ...state, costumers: action?.payload };
    case CREATECUSTOMER:
      return {
        ...state,
        costumers: [...state.costumers, action?.payload],
      };
    case UPDATECUSTOMER:
      const objIndex = state.costumers.findIndex(
        (obj) => obj._id === action?.payload._id
      );

      const updated = (state.costumers[objIndex] = action?.payload);
      console.log(updated);
      return {
        ...state,
        costumers: state.costumers,
      };

    case DELETECUSTOMER:
      const deleted = state.costumers.filter(
        (item) => item._id !== action?.payload._id
      );
      console.log({ deleted });
      return {
        ...state,
        costumers: deleted,
      };
    default:
      return state;
  }
};
export default costumerReducers;
