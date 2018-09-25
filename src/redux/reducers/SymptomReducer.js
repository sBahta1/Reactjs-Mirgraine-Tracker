import { combineReducers } from 'redux';

const emptyHead = {
    temple_left: false,
    temple_right: false,
    scalp_left: false,
    scalp_right: false,
    forehead_left: false,
    forehead_center: false,
    forehead_right: false,
    skull: false
}
const emptyNeck = {
    shoulder_left: false,
    shoulder_right: false,
    neck_left: false,
    neck_right: false,
    neck_spine: false,
}
const emptyBody = {
    back_upper: false,
    back_mid: false,
    back_lower: false,
}
const migraineHead = (state = emptyHead, action) => {
    if (action.type === 'SET_HEADLOC') {
        let value = action.payload.value;
        return { ...state, [action.payload.place]: value };
    }
    return state;
}
const migraineNeck = (state = emptyNeck, action) => {
    if (action.type === 'SET_NECKLOC') {
        let value = action.payload.value;
        return { ...state, [action.payload.place]: value };
    }
    return state;
}
const migraineBody = (state = emptyBody, action) => {
    if (action.type === 'SET_BODYLOC') {
        let value = action.payload.value;
        return { ...state, [action.payload.place]: value };
    }
    return state;
}





export default combineReducers({
    migraineBody,
    migraineHead,
    migraineNeck,
});