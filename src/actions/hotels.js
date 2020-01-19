import { RSAA } from 'redux-api-middleware';
import { API_URL } from '../constants';

export const GET_HOTELS_REQUEST = 'GET_HOTELS_REQUEST';
export const GET_HOTELS_SUCCESS = 'GET_HOTELS_SUCCESS';
export const GET_HOTELS_FAILURE = 'GET_HOTELS_FAILURE';

export const getHotels = (options = {}) => dispatch => {

    return dispatch({
        [RSAA]: {
            endpoint: `${API_URL}/hotels/hotels`,
            method: 'GET',
            types: [
                'GET_HOTELS_REQUEST',
                'GET_HOTELS_SUCCESS',
                'GET_HOTELS_FAILURE'
            ]
        }
    });
};
