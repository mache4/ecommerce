import { GET_PRODUCTS, GET_FEATURED_PRODUCTS } from "../../constants/actionTypes";

export default function products(state = { shopProducts: [], featuredProducts: [] }, action: any) {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, shopProducts: action.data };
        case GET_FEATURED_PRODUCTS:
            return { ...state, featuredProducts: action.data };
        default:
            return state;
    }
};