import * as types from "./actionTypes";


export const setExcercises = (exercises) => {
    return {
        type: types.SET_EXERCISES,
        payload: exercises
    };
}

export const selectedExcercise = (selecteExercise) => {
    return {
        type: types.SELECTED_EXERCISE,
        payload: selecteExercise
    };
}