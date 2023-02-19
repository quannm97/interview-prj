import { createSlice } from "@reduxjs/toolkit";

const initialState= {trains:["Push up", "Pull up","Pull up 2","Pull up 3"]}

const trainSlide = createSlice({
    name:'train',
    initialState,
    reducers:{}
})

export const selectTrains = state => {
    console.log(state.train.trains) 
    return state.train.trains};

const trainReducer = trainSlide.reducer;


export  {trainReducer , trainSlide};

