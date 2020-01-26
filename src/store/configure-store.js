import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { localStorageMiddleware, promiseMiddleware } from '../middleware';
import reducer from '../reducers';

export default function configureStore(initialState = {}) {
  const middlewares = [promiseMiddleware, localStorageMiddleware]; // [thunkMiddleware, apiMiddleware]

  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);

  return createStore(
    reducer,
    applyMiddleware(...middlewares)
  );
}

