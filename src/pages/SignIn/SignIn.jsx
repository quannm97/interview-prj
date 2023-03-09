import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../../constants/routes.js';
import { googleSignInInitial, signInInitial } from '../../features/redux/actions/formActions.js';


const SignIn = () => {
  const [state,setState]= useState({
    email:"",
    password:"",
    isShowPassword:false
  })

  const {email,password,isShowPassword}=state;
  const handleShowHidePassword = () => {
    setState((prevState) => ({...prevState,isShowPassword: !prevState.isShowPassword}));
  };

  const navigate=useNavigate();

  const {currentUser}= useSelector((state)=> state.user)

  useEffect(()=>{
    if (currentUser) {
      console.log(currentUser)
      navigate(ROUTES.HOME);
    }
  },[currentUser,navigate])

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if( !email || !password){
      return;
    }
    dispatch(signInInitial(email,password));
    // setState({email:"",password:""})
  };

  const handleGoogleSignIn=(e) =>{
    e.preventDefault();
    dispatch(googleSignInInitial());
  }

  return (
    <div className="signIn-background">
    <div className="signIn-container">
      <div className="form-slogan">
        <h2 className="col-12 text-signIn">Sign in to account</h2>
        <p className="col-12 signIn-slogan">
          Default email:admin@email.com
          Default password:123456
        </p>
      </div>
      <form className="signIn-content" onSubmit={handleSubmit}>
        <div className="col-12 form-group signIn-input">
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setState({...state,[e.target.name]:e.target.value})}
            value={email}
            placeholder="E-mail Address"
            className="form-control"
          />
        </div>
        <div className="col-12 form-group signIn-input">
          <input
            type={isShowPassword ? "text" : "password"}
            name="password"
            id="password"
            onChange={(e) => setState({...state,[e.target.name]:e.target.value})}
            value={password}
            placeholder="Password"
            className="form-control"
          />
          <i className={isShowPassword ?'fas fa-eye social-icon':'fas fa-eye-slash social-icon'} onClick={handleShowHidePassword}></i>
        </div>
        <div className="btn-group">
          <button
            type="submit"
            className="btn btn-signIn btn-primary"
            onSubmit={(e)=>handleSubmit(e)}
          >
            Sign in
          </button>
        </div>
      </form>
      <div className="social-signIn">
        <button href="#" className="social-link">
          <i className="fab fa-facebook-f social-icon facebook"></i>
          <span className="social-text">Facebook</span>
        </button>
        <button className="social-link" onClick={handleGoogleSignIn}>
          <i className="fab fa-google-plus-g social-icon google"></i>
          <span className="social-text">Google</span>
        </button>
        <button href="#" className="social-link">
          <i className="fab fa-linkedin-in social-icon linkendin"></i>
          <span className="social-text">Linkendin</span>
        </button>
      </div>
      <div className="other-form">

      <a className="link-text" href={ROUTES.SIGNUP} >Sign up</a>
      <button className="link-text">Forget Password</button>
      </div>
    </div>
  </div>
  )
}

export default SignIn