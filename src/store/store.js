import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import thunk from "redux-thunk";
import rootReducer from "../features/redux/reducer/rootReducer";

const middware = [thunk]

if(process.env.NODE_ENV === "development"){
    middware.push(logger)

}

export const store= configureStore({
    reducer:rootReducer,
    middleware:[...middware,thunk],
})