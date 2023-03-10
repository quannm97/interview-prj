
import { combineReducers } from "redux";
import  userReducer  from "./userReducer";
import { trainReducer } from "../../trainSlice/trainSlice";
import { excerciseReducer, selectedExerciseReducer,  } from "./exerciseReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
  };
  const rootReducer = combineReducers({
      user:userReducer,
      allExercises:excerciseReducer,
      selectedExcercise:selectedExerciseReducer,
    })
    const persistedReducer = persistReducer(persistConfig,rootReducer)


export default persistedReducer;