import Footer from "../Footer";
import Header from "../Header";
import SideNavBar from "../SideNavBar";
import "./App.scss";

import React from "react";
import Home from "../Home/Home";
import SignUp from "../../pages/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
const App = () => {
  return (
    <div>
      
      <Routes>
      <Route exact path={ROUTES.LANDING} element = {<Home/>}/>
      <Route path={ROUTES.SIGNUP} component = {<SignUp/>}/>
      </Routes>
      
    </div>
  );
};

export default App;
