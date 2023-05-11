import { GET_PRODUCTS, GET_FEATURED_PRODUCTS } from '../../constants/actionTypes';
import * as api from '../../api/index';

export const getProducts = (query: any) => async (dispatch: any) => {
    try {
        const { data } = await api.getProducts(query);

        dispatch({ type: GET_PRODUCTS, data: data.data });
    } catch (error) {
        dispatch({ type: GET_PRODUCTS, errors: error });
        return console.log(error);
    }
}

export const getFeaturedProducts = () => async (dispatch: any) => {
    try {
        const { data } = await api.getFeaturedProducts();

        dispatch({ type: GET_FEATURED_PRODUCTS, data: data.data });
    } catch (error) {
        dispatch({ type: GET_FEATURED_PRODUCTS, errors: error });
        return console.log(error);
    }
}