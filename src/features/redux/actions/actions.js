import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';
import * as types from './actionsTypes';


const signUpStart = () => ({ 
    type: types.SIGNUP_START,
});

const signUpSuccess = (user) => ({ 
    type: types.SIGNUP_SUCCESS,
    payload:user
});

const signUpFail = (error) => ({ 
    type: types.SIGNUP_FAIL,
    payload: error,
});

export const signUpInitial= (email,password,displayName)=>{
    return function (dispatch) {
        dispatch(signUpStart);
        auth.createUserWithEmailAndPassword(email,password).then(({user})=>{
            user.updateProfile({
                displayName
            })
            dispatch(signUpSuccess(user))
        }).catch((error)=> dispatch(signUpFail(error.message)))
        
    }
}