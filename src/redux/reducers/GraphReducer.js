import { combineReducers } from 'redux';

const sorted = {
    date: null,
    mood: null,
    hydration: null,
    fitness: null,
    nutrition: null,
    medication: null,
    menstruating: null,
}


const graphReducer = (state = sorted, action) => {
    if (action.type === 'SET_GRAPH_DATA') {
        let dateArr = []
        let moodArr = []
        let hydrationArr = []
        let fitnessArr = []
        let nutritionArr = []
        let medicationArr = []
        let menstruatingArr = []
        for (let i = 0; i < action.payload.length; i++) {
            const row = action.payload[i];
            dateArr.push(row.date);
            moodArr.push(row.mood);
            hydrationArr.push(row.hydration)
            fitnessArr.push(row.fitness)
            nutritionArr.push(row.nutrition)
            medicationArr.push(row.medication)
            menstruatingArr.push(row.menstruating)
        }
        return {
            ...state,
            date: dateArr,
            mood: moodArr,
            hydration: hydrationArr,
            fitness: fitnessArr,
            nutrition: nutritionArr,
            medication: medicationArr,
            menstruating: menstruatingArr
        }
    };
    return state;
};

export default combineReducers({ graphReducer });