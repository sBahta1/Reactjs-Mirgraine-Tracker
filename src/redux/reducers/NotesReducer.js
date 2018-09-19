import { combineReducers } from 'redux';
const notesReducer = (state = [], action) => {
    if (action.type === 'SET_NOTES') {
        return action.payload
    }
        return state
}
export default combineReducers({ notesReducer, })