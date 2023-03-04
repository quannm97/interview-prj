import Footer from "../Footer";
import Header from "../Header";
import SideNavBar from "../SideNavBar";
import "./App.scss";

import React from "react";
import Home from "../Home/Home";
import SignUp from "../../pages/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import UserRoute from "../Loading/UserRoute";
import SignIn from "../../pages/SignIn/SignIn";
const App = () => {
  return (
    
      

      <Routes>
      <Route exact path={ROUTES.LANDING} element = {<UserRoute/>}/>
        <Route exact path={ROUTES.HOME} element = {<Home/>}/>
      
      <Route path={ROUTES.SIGNUP} element = {<SignUp/>}/>
      <Route path={ROUTES.SIGNIN} element = {<SignIn/>}/>
      </Routes>
      
      
   
  );
};

export default App;
