import * as types from "./actionTypes";


export const setExcercises = (excercises) => {
    return {
        type: types.SET_EXERCISES,
        payload: excercises
    };
}

export const selectedExcercise = (excercise) => {
    return {
        type: types.SET_EXERCISES,
        payload: excercise
    };
}