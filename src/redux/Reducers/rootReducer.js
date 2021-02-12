import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import purchaseReducer from "./purchaseReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    purchase: purchaseReducer,
});

export default rootReducer;
