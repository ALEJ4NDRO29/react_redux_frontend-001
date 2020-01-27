import { GET_HOTELS_REQUEST, GET_HOTELS_SUCCESS, GET_HOTELS_FAILURE } from "../constants";


export default async function (state = {}, action) {
    switch (action.type) {
        case GET_HOTELS_REQUEST:
            return {
                ...state,
            };

        case GET_HOTELS_SUCCESS:
            return {
                ...state,
                hotels: action.payload[0],
            };

        case GET_HOTELS_FAILURE:
            return {
                ...state,
            };

        default:
            return state;
    }
}
