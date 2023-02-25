import { createSlice } from "@reduxjs/toolkit";



const trainSlide = createSlice({
    name:'train',
    initialState:{trains:["Upper Body", "Full Body","Skill","Cardio"]},
    reducers:{}
})

export const selectTrains = state => {
    console.log(state.train.trains) 
    return state.train.trains};

const trainReducer = trainSlide.reducer;


export  {trainReducer , trainSlide};

