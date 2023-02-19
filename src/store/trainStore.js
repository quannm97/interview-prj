import { configureStore } from "@reduxjs/toolkit";
import { trainReducer } from "../features/trainSlice/trainSlice";

export const trainStore = configureStore ({
    reducer:{
        train: trainReducer
    },
})