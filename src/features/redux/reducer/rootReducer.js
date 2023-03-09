
import { combineReducers } from "redux";
import  userReducer  from "./userReducer";
import { trainReducer } from "../../trainSlice/trainSlice";
import { excerciseReducer } from "./exerciseReducer";

const rootReducer = combineReducers({
    user:userReducer,
    train:trainReducer,
    allExercises:excerciseReducer,
    
})

export default rootReducer;