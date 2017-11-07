import { combineReducers } from 'redux';
import AuthReducer from './reducer_Auth';

export default combineReducers({
  auth: AuthReducer
});
