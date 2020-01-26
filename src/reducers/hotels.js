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
                // hotels: [{ "name": "Hotel 1", "stars": "4", "location": "Hotel 1 Loc" }, { "name": "Hotel 2", "stars": "5", "location": "Hotel 2 Loc" }]
                hotels: action.payload
            };

        case GET_HOTELS_FAILURE:
            return {
                ...state,
            };

        default:
            return state;
    }
}
