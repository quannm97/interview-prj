import { SIGNIN } from '../../../constants/routes';
import * as types from '../actions/actionTypes';


const initialState= {
    loading:false,
    currentUser: null,error:null,
};

const userReducer = (state = initialState , action)=>{
    switch (action.type) {
        case types.SIGNUP_START:
        case types.SIGNIN_START:
            return{
                ...state,
                loading:true
            }
        case types.SIGNUP_SUCCESS:
            case types.SIGNIN_SUCCESS:
            console.log(action.payload);
            return{
                ...state,
                loading:false,
                currentUser: action.payload,
            }
        case types.SIGNUP_FAIL:
            case types.SIGNIN_FAIL:
            return{
                ...state,
                loading:false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default userReducer;