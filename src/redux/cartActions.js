import * as actions from "./actionTypes";

export const addToCartMiddleWare = (product) => (dispatch) => {
  dispatch({ type: actions.ADD_TO_CART, product });
  alert(`Furniture has added to Cart !`);
};

export const purchaseMiddleWare = (product) => (dispatch) => {
  dispatch({ type: actions.PURCHASE_SUCCEED, product });
};
