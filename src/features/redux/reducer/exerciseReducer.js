import * as types from "../actions/actionTypes";


const initialState = {
    exercises: [],
};

export const excerciseReducer = (state = initialState, action ) => {
    switch (action.type) {
        case types.SET_EXERCISES:
            return{
                ...state,
                exercises:action.payload,
            };
        default:
            return state;
            
    }

};

export const selectedExerciseReducer = (state={},action) =>{
    switch (action.type) {
        case types.SELECTED_EXERCISE:
            return {...state,exercise:action.payload};
    
        default:
            return state;
    }
} 