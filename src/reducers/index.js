import { combineReducers } from 'redux';
import zoneReducer from './zoneReducer';
// other reducers needs to add here

const rootReducers = combineReducers({
  zoneData: zoneReducer
});
export default rootReducers;