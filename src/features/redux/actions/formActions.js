import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, googleAuthProvider } from "../../../firebase/firebase";
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
//SIGNOUT
const signOutStart = () => ({
  type: types.SIGNOUT_START,
});

const signOutSuccess = (user) => ({
  type: types.SIGNOUT_SUCCESS,
  payload: user,
});

const signOutFail = (error) => ({
  type: types.SIGNOUT_FAIL,
  payload: error,
});
//SET_USER

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});
//GOOGLE_SIGN_IN
const googleSignInStart = () => ({
  type: types.GOOGLE_SIGNIN_START,
});

const googleSignInSuccess = (user) => ({
  type: types.GOOGLE_SIGNIN_SUCCESS,
  payload: user,
});

const googleSignInFail = (error) => ({
  type: types.GOOGLE_SIGNIN_FAIL,
  payload: error,
});
export const signUpInitial = (email, passwordOne, fullname) => {
  const password=passwordOne;
  const displayName=fullname;
  return function (dispatch) {
    console.log(email, password, displayName);
    dispatch(signUpStart());

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user=userCredential.user;
          updateProfile(user, {
            displayName,
            uid:user.uid,
            accessToken:user.accessToken,
          })

        dispatch(signUpSuccess(userCredential.user));
      })
      .catch((error) => {
        dispatch(signUpFail(error.message))
        alert(error.message)
      });
  };
};

export const signInInitial = (email, password) => {
  return function (dispatch) {
    dispatch(signInStart());
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(signInSuccess(user));
      })
      .catch((error) => {
        dispatch(signInFail(error.message))
        alert(error.message)
      });
  };
};

export const signOutInitial = () => {
  return function (dispatch) {
    dispatch(signOutStart());
    signOut(auth)
      .then((resp) => {
        dispatch(signOutSuccess());
      })
      .catch((error) => {
        dispatch(signOutFail(error.message))
        alert(error.message)
      });
  };
};

export const googleSignInInitial = () => {
  return function (dispatch) {
    dispatch(googleSignInStart());
    signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => {
        dispatch(googleSignInSuccess(user));
      })
      .catch((error) => dispatch(googleSignInFail(error.message)));
  };
};
