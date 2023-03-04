import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import * as types from "./actionTypes";

//SIGN IP
const signUpStart = () => ({
  type: types.SIGNUP_START,
});

const signUpSuccess = (user) => ({
  type: types.SIGNUP_SUCCESS,
  payload: user,
});

const signUpFail = (error) => ({
  type: types.SIGNUP_FAIL,
  payload: error,
});
//SIGNIN
const signInStart = () => ({
  type: types.SIGNIN_START,
});

const signInSuccess = (user) => ({
  type: types.SIGNIN_SUCCESS,
  payload: user,
});

const signInFail = (error) => ({
  type: types.SIGNIN_FAIL,
  payload: error,
});

export const signUpInitial = (email, passwordOne, fullname) => {
  return function (dispatch) {
    dispatch(signUpStart());
    
      createUserWithEmailAndPassword(auth,email, passwordOne )
      .then(({ user }) => {
        updateProfile({
          displayName: fullname,  
          password:passwordOne       
        });
        
        dispatch(signUpSuccess(user));
      })
      .catch((error) => dispatch(signUpFail(error.message)));
  };
};
export const signInInitial = (email, password) => {
  return function (dispatch) {
    dispatch(signInStart());
    signInWithEmailAndPassword(auth,email, password )
    .then(({ user }) => {
        dispatch(signInSuccess(user));
      })
      .catch((error) => dispatch(signInFail(error.message)));
  };
};