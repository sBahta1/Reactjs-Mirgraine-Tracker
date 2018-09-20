const emptyRx = {
    med_name: '',
    symptom: '',
    dose: 0,
    regiment: '',
}

const RxReducer = (state = emptyRx, action) => {
    if (action.type === 'SET_DOSE') {
        return { ...state, dose: action.payload };
    } else if (action.type === 'SET_MED_NAME') {
        return { ...state, med_name: action.payload };
    } else if (action.type === 'SET_SYMP') {
        return { ...state, symptom: action.payload };
    } else if (action.type === 'SET_REGI') {
        return { ...state, regiment: action.payload };
    } else {
        return state;
    }
};

export default RxReducer;