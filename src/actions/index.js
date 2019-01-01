import {
    FETCH_PHONES_START,
    FETCH_PHONES_SUCCESS,
    FETCH_PHONES_FAILURE,
    FETCH_PHONE_BY_ID_SUCCESS,
    FETCH_PHONE_BY_ID_FAILURE,
    ADD_PHONE_TO_BASKET
} from '../actionTypes';
import {
    fetchPhones as fetchPhonesApi,
    fetchPhoneById as fetchPhoneByIdApi
} from '../api/index';

export const fetchPhones = () => async dispatch => {
    try {
        dispatch({ type: FETCH_PHONES_START })

        const phones = await fetchPhonesApi()

        dispatch({
            type: FETCH_PHONES_SUCCESS,
            payload: phones
        })
    } catch (err) {
        dispatch({
            type: FETCH_PHONES_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const fetchPhoneById = id => async dispatch => {
    try {
        const phone = await fetchPhoneByIdApi(id)
        dispatch({
            type: FETCH_PHONE_BY_ID_SUCCESS,
            payload: phone
        })
    } catch (err) {
        dispatch({
            type: FETCH_PHONE_BY_ID_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const addPhoneToBasket = id => dispatch => {
    dispatch({
        type: ADD_PHONE_TO_BASKET,
        payload: id
    })
} 
