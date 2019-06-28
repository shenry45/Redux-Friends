import { combineReducers } from 'redux';
import { friendsReducer } from './friendsReducer';
import { logInReducer } from './logInReducer';

export default combineReducers({
  friendsReducer,
  logInReducer
});