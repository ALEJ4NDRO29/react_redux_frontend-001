import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { localStorageMiddleware, promiseMiddleware } from './middleware';
import reducer from './reducer';

const middlewares = [promiseMiddleware, localStorageMiddleware]; // [thunkMiddleware, apiMiddleware]

const loggerMiddleware = createLogger();
middlewares.push(loggerMiddleware);


const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
);

export default store;