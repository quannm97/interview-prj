import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/redux/actions/actions";
import { auth } from "../firebase/firebase";

export const listenForAuthChanges =(dispatch) =>{
    const unsubscribe = onAuthStateChanged(auth,authUser=>{
        if(authUser){
            dispatch(setUser(authUser));
        }
        else{
            dispatch(setUser(authUser));
        }
    })

    return unsubscribe;
}