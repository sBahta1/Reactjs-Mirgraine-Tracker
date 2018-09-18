const emptyRecord = {
    mood: 0,
    hydro: 0,
    fitness: 0,
    nutrition: 0,
}

const dailyreducer = (state = emptyRecord, action) =>{
    if (action.type === 'SET_MOOD'){
        return {mood: action.payload};
    } else if (action.type ==='SET_HYDRO'){
        return {hydro: action.payload};
    } else if (action.type === 'SET_FIT'){
        return {fitness: action.payload};
    } else if (action.type === 'SET_NUTRI'){
        return {nutrition: action.payload};
    } else{
        return state;
    }
}
export default dailyreducer;