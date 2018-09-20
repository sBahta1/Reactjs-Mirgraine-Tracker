import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import daily from './DailyReducer';
import notes from './NotesReducer';
import rx from './RxReducer';
const store = combineReducers({
  user,
  login,
  daily,
  notes,
  rx,
});

export default store;
