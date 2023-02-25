
import { combineReducers } from "redux";
import  userReducer  from "./userReducer";
import { trainReducer } from "../../trainSlice/trainSlice";

const rootReducer = combineReducers({
    user:userReducer,
    train:trainReducer
})

export default rootReducer;