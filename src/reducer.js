import hotelList from './reducers/hotelList'
import { combineReducers } from 'redux';
import home from './reducers/home';
import auth from './reducers/auth';
import common from './reducers/common';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  hotelList,
  home,
  auth,
  common,
  router: routerReducer
});