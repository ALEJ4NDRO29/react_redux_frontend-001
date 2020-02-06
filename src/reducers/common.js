import {
    APP_LOAD,
    REDIRECT,
    LOGOUT,
    LOGIN,
    REGISTER,
    HOME_PAGE_UNLOADED,
    LOGIN_PAGE_UNLOADED,
    REGISTER_PAGE_UNLOADED,
    HEADER_LOADED
} from '../constants';
  
    const defaultState = {
        appName: 'REACTIVE JEI',
        token: null,
        viewChangeCounter: 0
    };
  
export default (state = defaultState, action) => {
    switch (action.type) {
        case HEADER_LOADED:
        case APP_LOAD:
            return {
                ...state,
                token: action.token || null,
                appLoaded: true,
                currentUser: action.payload ? action.payload.user : null
            };
        case REDIRECT:
            return { ...state, redirectTo: '/' };
        case LOGOUT:
            return { ...state, redirectTo: '/', token: null, currentUser: null };
        case LOGIN:
        case REGISTER:
            return {
                ...state,
                redirectTo: action.error ? null : '/',
                token: action.error ? null : action.payload.user.token,
                currentUser: action.error ? null : action.payload.user
            };
        case HOME_PAGE_UNLOADED:
        case LOGIN_PAGE_UNLOADED:
        case REGISTER_PAGE_UNLOADED:
            return { ...state, viewChangeCounter: state.viewChangeCounter + 1 };
        default:
            return state;
    }
};
  