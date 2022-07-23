import {
  GETPURCHASE,
  CREATEPURCHASE,
  UPDATEPURCHASE,
  DELETEPURCHASE,
} from "../constants/actionTypes";
const purchaseReducers = (state = { purchases: [] }, action) => {
  switch (action.type) {
    case GETPURCHASE:
      return { ...state, purchases: action?.payload };
    case CREATEPURCHASE:
      return {
        ...state,
        purchases: [...state.purchases, action?.payload],
      };
    case UPDATEPURCHASE:
      const objIndex = state.purchases.findIndex(
        (obj) => obj._id === action?.payload._id
      );

      const updated = (state.purchases[objIndex] = action?.payload);
      console.log(updated);
      return {
        ...state,
        purchases: state.purchases,
      };

    case DELETEPURCHASE:
      const deleted = state.purchases.filter(
        (item) => item._id !== action?.payload._id
      );
      console.log({ deleted });
      return {
        ...state,
        purchases: deleted,
      };
    default:
      return state;
  }
};
export default purchaseReducers;
