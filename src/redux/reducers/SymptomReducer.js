import { combineReducers } from 'redux';

emptyHead = {
    temple_left: false,
    temple_right: false,
    scalp_left: false,
    scalp_right: false,
    forehead_left: false,
    forehead_center: false,
    forehead_right: false,
    skull: false
}
emptyNeck = {
    shoulder_left: false,
    shoulder_right: false,
    neck_left: false,
    neck_right: false,
    neck_spine: false,
}
emptyBody = {
    back_upper: false,
    back_mid: false,
    back_lower: false,
}
const migraineHead = (state= emptyHead, action) =>{

}