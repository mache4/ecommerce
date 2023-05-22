import { GET_FEATURED_PRODUCTS } from '../../constants/actionTypes';
import * as api from '../../core/api';
export const getFeaturedProducts = () => async (dispatch: any) => {
    try {
        const { data } = await api.getFeaturedProducts();

        dispatch({ type: GET_FEATURED_PRODUCTS, data: data.data });
    } catch (error) {
        dispatch({ type: GET_FEATURED_PRODUCTS, errors: error });
        return console.log(error);
    }
}