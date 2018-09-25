import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import daily from './DailyReducer';
import notes from './NotesReducer';
import rx from './RxReducer';
import migraine from './SymptomReducer'
const store = combineReducers({
  user,
  login,
  daily,
  notes,
  rx,
  migraine
});

export default store;
