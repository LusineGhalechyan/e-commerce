import * as actions from "../actionTypes";

const initialState = {
  purchasedItems: [],
  isPurchaseSucceed: false,
};

const purchaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PURCHASE_SUCCEED: {
      return {
        ...state,
        purchasedItems: [...state.purchasedItems, action.product],
        isPurchaseSucceed: true,
      };
    }

    default:
      return state;
  }
};

export default purchaseReducer;
