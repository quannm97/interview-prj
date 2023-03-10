import "./App.scss";

import React, {  useEffect } from "react";
import Home from "../Home/Home";
import SignUp from "../../pages/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import UserRoute from "../Loading/UserRoute";
import SignIn from "../../pages/SignIn/SignIn";
import User from "../../pages/User";
import { useDispatch } from "react-redux";
import { listenForAuthChanges } from "../../services/Auth";
import ExerciseDetails from "../ExerciseComponents/ExerciseDetails/ExerciseDetails";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = listenForAuthChanges(dispatch);
    return unsubscribe;
  }, [dispatch]);
  
  return (
    <Routes>
      <Route exact path={ROUTES.HOME} element={<Home />} />
      <Route exact path={ROUTES.LANDING} element={<UserRoute />}>
        <Route path={ROUTES.USER} element={<User />}>
          <Route path={`${ROUTES.USER}/:exerciseName` } element={<ExerciseDetails/>}/>
        </Route>
      </Route>
      <Route path={ROUTES.SIGNUP} element={<SignUp />} />
      <Route path={ROUTES.SIGNIN} element={<SignIn />} />
    </Routes>
  );
};

export default App;
