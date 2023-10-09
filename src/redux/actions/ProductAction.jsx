import {
    PRODUCT_DATA_ERROR,
    PRODUCT_DATA_LOADING,
    PRODUCT_DATA_SUCCESS,
  } from "../types/ProductTypes";

const initialState = {
  data: null,
  success: false,
  isLoading: true,
};

export const getProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DATA_LOADING,
      payload: initialState,
    });

    var res = await fetch("https://fakestoreapi.com/products").then((x) =>
      x.json()
    );
    console.log("res",res);
    initialState.data = res;
    initialState.isLoading = false;
    initialState.success = true;
    dispatch({
      type: PRODUCT_DATA_SUCCESS,
      payload: initialState,
    });
  } catch (error) {
    initialState.data = error;
    initialState.isLoading = false;
    initialState.success = false;
    dispatch({
      type: PRODUCT_DATA_ERROR,
      payload: initialState,
    });
  }
};
