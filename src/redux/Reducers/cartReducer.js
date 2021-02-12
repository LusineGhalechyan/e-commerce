import * as actions from "../actionTypes";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
