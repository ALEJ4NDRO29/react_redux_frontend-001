import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { localStorageMiddleware, promiseMiddleware } from './middleware';
import reducer from './reducer';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  const loggerMiddleware = createLogger();

  const middlewares = [promiseMiddleware, localStorageMiddleware, loggerMiddleware, myRouterMiddleware]; // [thunkMiddleware, apiMiddleware]

  return applyMiddleware(...middlewares);
}


const store = createStore(
  reducer, getMiddleware()
);

export default store;