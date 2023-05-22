import { combineReducers } from "redux";
import cartItems from "./cartItems";
import products from "./products";

const reducer = combineReducers({ products, cartItems });

export default reducer;