import { HOME_PAGE_LOADED, HOTEL_DETAILS_LOADED, INPUT_COMMENT_HOTEL_DETAILS_LOADED, HOTEL_COMMENT_CREATE } from '../constants';

export default (state = {}, action) => {
	switch (action.type) {
		case HOME_PAGE_LOADED:
			return {
				...state,
				hotels: action.payload[0],
			};
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