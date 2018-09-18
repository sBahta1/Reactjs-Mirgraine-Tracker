const emptyRecord = {
    mood: 5,
    hydro: 5,
    fitness: 5,
    nutrition: 5,
    medication:false,
    menstruation:false,
}

const dailyreducer = (state = emptyRecord, action) =>{
    if (action.type === 'SET_MOOD'){
        return {...state, mood: action.payload};
    } else if (action.type ==='SET_HYDRO'){
        return {...state, hydro: action.payload};
    } else if (action.type === 'SET_FIT'){
        return {...state, fitness: action.payload};
    } else if (action.type === 'SET_NUTRI'){
        return {...state, nutrition: action.payload};
    } else if (action.type === 'SET_MED'){
        return {...state, medication:action.payload};
    }else if (action.type === 'SET_MENS'){
        return {...state, menstruation:action.payload};
    }else {
        return state;
    }
}
export default dailyreducer;