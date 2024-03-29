import { ADD_CART_ITEM, REMOVE_CART_ITEM, RESET_CART_ITEMS, PATCH_CART_ITEM } from '../../constants/actionTypes';

export const addCartItem = (item: any) => async (dispatch: any) => {
    try {
        dispatch({ type: ADD_CART_ITEM, data: item });
    } catch (error) {
        dispatch({ error: error });
        return console.log(error);
    }
}

export const patchCartItem = (id: any, number: any) => async (dispatch: any) => {
    try {
        dispatch({ type: PATCH_CART_ITEM, id, number });
    } catch (error) {
        dispatch({ error: error });
        return console.log(error);
    }
}

export const removeCartItem = (id: string) => async (dispatch: any) => {
    try {
        dispatch({ type: REMOVE_CART_ITEM, id });
    } catch (error) {
        dispatch({ error: error });
        return console.log(error);
    }
}