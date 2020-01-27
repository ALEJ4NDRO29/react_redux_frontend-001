import { combineReducers } from "redux";
import hotels from './hotels';
import { routerReducer } from "react-router-redux";


export default combineReducers({
    hotels,
    router: routerReducer
});