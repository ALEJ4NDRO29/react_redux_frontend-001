import { GET_HOTELS_REQUEST, GET_HOTELS_SUCCESS, GET_HOTELS_FAILURE } from "../actions/hotels";

const initialState = {
    collection: {},
    isFetched: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_HOTELS_REQUEST:
            return {
                ...state,
                isFetched: true
            };

        case GET_HOTELS_SUCCESS:
            return {
                ...state,
                collection: {
                    ...state.collection,
                    ...action.payload.results.reduce((accumulator, item) => {
                        const { url } = item;
                        const id = url.substring(34, url.length - 1);

                        return {
                            ...accumulator,
                            [id]: {
                                id,
                                ...item
                            }
                        };
                    }, {})
                },
                isFetched: false
            };

        case GET_HOTELS_FAILURE:
            return {
                ...state,
                isFetched: false
            };

        default:
            return state;
    }
}
