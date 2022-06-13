import {
  GETPRODUCT,
  CREATEPRODUCT,
  UPDATEPRODUCT,
  DELETEPRODUCT,
} from "../constants/actionTypes";
const productReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case GETPRODUCT:
      return { ...state, products: action?.payload };
    case CREATEPRODUCT:
      return {
        ...state,
        products: [...state.products, action?.payload],
      };
    case UPDATEPRODUCT:
      const objIndex = state.products.findIndex(
        (obj) => obj._id === action?.payload._id
      );

      const updated = (state.products[objIndex] = action?.payload);
      console.log(updated);
      return {
        ...state,
        products: state.products,
      };

    case DELETEPRODUCT:
      const deleted = state.products.filter(
        (item) => item._id !== action?.payload._id
      );
      console.log({ deleted });
      return {
        ...state,
        products: deleted,
      };
    default:
      return state;
  }
};
export default productReducers;
