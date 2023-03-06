import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet,  } from 'react-router-dom'

import * as ROUTES from "../../constants/routes";
const UserRoute = () => {
    const {currentUser} = useSelector((state)=>state.user)
  return currentUser ? <Outlet/> : <Navigate to={ROUTES.SIGNIN}/>
  
}

export default UserRoute