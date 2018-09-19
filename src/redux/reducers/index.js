import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import daily from './DailyReducer'
import notes from './NotesReducer'
const store = combineReducers({
  user,
  login,
  daily,
  notes,
});

export default store;
