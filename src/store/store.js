import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import thunk from "redux-thunk";
import persistedReducer from "../features/redux/reducer/rootReducer";

const middleware = [thunk]

if(process.env.NODE_ENV === "development"){
    middleware.push(logger)

}

export const store= configureStore({
    reducer:persistedReducer,
    middleware:[...middleware],
})