import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet,  } from 'react-router-dom'

import * as ROUTES from "../../constants/routes";
import { listenForAuthChanges } from '../../services/Auth';
const UserRoute = () => {
    const {currentUser} = useSelector((state)=>state.user)
    
  return currentUser ? <Outlet/> : <Navigate to={ROUTES.SIGNIN}/>
  
}

export default UserRoute