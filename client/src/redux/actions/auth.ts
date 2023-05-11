import { AUTH } from '../../constants/actionTypes';
import * as api from '../../api/index';

export const signin = (formData: any, setSignin: any, setOverlay: any) => async (dispatch: any) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });
    } catch (error: any) {
        return dispatch({ type: AUTH, error: error.response.data.message });
    }
    setSignin(false);
    setOverlay(false);
}

export const signup = (formData: any, setSignin: any, setOverlay: any) => async (dispatch: any) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });
    } catch (error: any) {
        return dispatch({ type: AUTH, error: error.response.data.message });
    }
    setSignin(false);
    setOverlay(false);
}