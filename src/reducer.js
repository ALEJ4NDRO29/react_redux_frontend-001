import hotelList from './reducers/hotelList'
import { combineReducers } from 'redux';
import home from './reducers/home';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  hotelList,
  home,
  router: routerReducer
});