import { PRODUCT_DATA_ERROR, PRODUCT_DATA_LOADING, PRODUCT_DATA_SUCCESS } from "../types/ProductTypes";

// const initialState = {
//   product: [],
//   loading: false,
//   error: null,
// };

export const ProductReducer = (state = { }, action) => {
  switch (action.type) {
    case PRODUCT_DATA_LOADING:
      return {
        ...state,
product:action.payload
      };
    case PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        product:action.payload
      };
    case PRODUCT_DATA_ERROR:
      return {
        ...state,
        product:action.payload
      };
    default:
      return state;
  }
};
