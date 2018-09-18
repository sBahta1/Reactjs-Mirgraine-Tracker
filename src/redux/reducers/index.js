import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import daily from './DailyReducer'
const store = combineReducers({
  user,
  login,
  daily,
});

export default store;
