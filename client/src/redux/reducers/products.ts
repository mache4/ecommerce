import { GET_FEATURED_PRODUCTS } from "../../constants/actionTypes";

export default function products(state = { featuredProducts: [] }, action: any) {
    switch (action.type) {
        case GET_FEATURED_PRODUCTS:
            return { ...state, featuredProducts: action.data };
        default:
            return state;
    }
};