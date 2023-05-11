import { combineReducers } from "redux";
import profile from "./auth";
import cartItems from "./cartItems";
import products from "./products";

const reducer = combineReducers({ profile, products, cartItems });

export default reducer;