import { HOTEL_COMMENT_CREATE, HOTEL_DETAILS_LOADED, INPUT_COMMENT_HOTEL_DETAILS_LOADED } from '../constants';

export default (state = {}, action) => {
	switch (action.type) {
		case HOTEL_DETAILS_LOADED:
			return {
				...state,
				hotel: action.payload[0],
				comments: action.payload[1]
			};
		case INPUT_COMMENT_HOTEL_DETAILS_LOADED:
			return {
				...state,
				currentUser: action.payload ? action.payload.user : null
			}
		case HOTEL_COMMENT_CREATE:
			return {
				...state,
				reloadComments: action.payload ? true : false
			}
		default:
			return state;
	}
};