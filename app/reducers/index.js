import { combineReducers } from "redux";
import dashboardReducer from './dashboard';

const allReducers = combineReducers({
    dataStore: dashboardReducer
})

export default allReducers;