import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import daily from './DailyReducer';
import notes from './NotesReducer';
import rx from './RxReducer';
import migraine from './SymptomReducer'
import graph from './GraphReducer';
const store = combineReducers({
  user,
  login,
  daily,
  notes,
  rx,
  migraine,
  graph,
});

export default store;
