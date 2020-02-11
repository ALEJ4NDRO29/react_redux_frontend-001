import agent from './agent';
import { APP_LOAD, JWT_STORAGE_KEY, LOGIN, LOGOUT, REGISTER, HOTEL_DETAILS_LOADED } from './constants';

const promiseMiddleware = store => next => action => {
    if (isPromise(action.payload)) {
        // store.dispatch({ type: ASYNC_START, subtype: action.type });

        // const currentView = store.getState().viewChangeCounter;
        // const skipTracking = action.skipTracking;

        action.payload.then(
            res => {
                // const currentState = store.getState();
                // if (!skipTracking && currentState.viewChangeCounter !== currentView) {
                //     return;
                // }
                console.log('RESULT', res);
                action.payload = res;
                // store.dispatch({ type: ASYNC_END, promise: action.payload });
                store.dispatch(action);
            },
            error => {
                // const currentState = store.getState();
                // if (!skipTracking && currentState.viewChangeCounter !== currentView) {
                //     return;
                // }
                console.log('ERROR', error);
                action.error = true;
                action.payload = error.response.body;
                // if (!action.skipTracking) {
                //     store.dispatch({ type: ASYNC_END, promise: action.payload });
                // }
                store.dispatch(action);
            }
        );

        return;
    }

    next(action);
};

const localStorageMiddleware = store => next => action => {
    switch (action.type) {
        case REGISTER:
        case LOGIN:
            if (!action.error) {
                window.localStorage.setItem(JWT_STORAGE_KEY, action.payload.user.token);
                agent.setToken(action.payload.user.token);
            }
            break;
        case LOGOUT:
                window.localStorage.removeItem(JWT_STORAGE_KEY);
                agent.setToken(null);
            break;
        case APP_LOAD:
            if (action.error) {
                window.localStorage.removeItem(JWT_STORAGE_KEY);
                agent.setToken(null);
                window.location.reload();
            }
            break;
        default:
            break;
    }

    next(action);
};

function isPromise(v) {
    return v && typeof v.then === 'function';
}


export { promiseMiddleware, localStorageMiddleware };

