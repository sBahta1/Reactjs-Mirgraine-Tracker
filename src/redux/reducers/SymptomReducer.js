import { combineReducers } from 'redux';

const empty = {
    temple_left: false,
    temple_right: false,
    scalp_left: false,
    scalp_right: false,
    forehead_left: false,
    forehead_center: false,
    forehead_right: false,
    skull: false,
    shoulder_left: false,
    shoulder_right: false,
    neck_left: false,
    neck_right: false,
    neck_spine: false,
    back_upper: false,
    back_mid: false,
    back_lower: false,
}

const migraineLocation = (state = empty, action) => {
    if (action.type === 'SET_LOC') {
        let value = action.payload.value;
        return { ...state, [action.payload.place]: value };
    }
    return state;
}






export default combineReducers({
    migraineLocation,
});