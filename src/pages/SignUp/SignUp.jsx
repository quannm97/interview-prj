import React, { useState } from 'react'
import * as ROUTES from '../../constants/routes.js';

const SignUp = () => {
  const INITIAL_STATE = {
    fullname: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null,
  };
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [isShowPassword, setIsShowPassword] = useState("");
  

  const isInvalid=formData.passwordOne !== formData.passwordTwo||
  formData.passwordOne === ''||
  formData.email === ''||
  formData.fullname ===''
  ;

  
const handleInputChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleShowHidePassword = () => {
  setIsShowPassword(!isShowPassword);
};

const handleSubmit = (e) => {
  e.preventDefault();
}
  return (
    <div className="signup-background">
    <div className="signup-container">
      <div className="form-slogan">
        <h2 className="col-12 text-signup">Register</h2>
        <p className="col-12 signup-slogan">
          Time is a valuable thing, watch it fly by as the pendulum swings.
        </p>
      </div>
      <form className="signup-content" onSubmit={(e) => handleSubmit(e)}>
        <div className="col-12 form-group signup-input">
          <input
            type="text"
            name="fullname"
            id="fullname"
            onChange={(e) => handleInputChange(e)}
            value={formData.fullname}
            placeholder="Full name"
            className="form-control"
          />
        </div>
        <div className="col-12 form-group signup-input">
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => handleInputChange(e)}
            value={formData.email}
            placeholder="E-mail Address"
            className="form-control"
          />
        </div>

        <div className="col-12 form-group signup-input">
          <input
            type={isShowPassword ? "text" : "password"}
            name="passwordOne"
            id="passwordOne"
            onChange={(e) => handleInputChange(e)}
            value={formData.passwordOne}
            placeholder="Password"
            className="form-control"
          />
          <i
            className={
              isShowPassword
                ? "fas fa-eye social-icon"
                : "fas fa-eye-slash social-icon"
            }
            onClick={(e) => handleShowHidePassword(e)}
          ></i>
        </div>

        <div className="col-12 form-group signup-input">
          <input
            type={isShowPassword ? "text" : "password"}
            name="passwordTwo"
            id="passwordTwo"
            onChange={(e) => handleInputChange(e)}
            value={formData.passwordTwo}
            placeholder="Repeat Password"
            className="form-control"
          />
          <i
            className={
              isShowPassword
                ? "fas fa-eye social-icon"
                : "fas fa-eye-slash social-icon"
            }
            onClick={(e) => handleShowHidePassword(e)}
          ></i>
        </div>

        <div className="btn-group">
          <button
            type="submit"
            className="btn btn-login btn-primary"
            onSubmit={(e)=>handleSubmit(e)}
            disabled={isInvalid}
          >
            Register
          </button>
        </div>
      </form>
      <div className="text-center" style={{ marginBottom: 14 }}>
        Or sign up with:
      </div>
      <div className="social-signup">
        <a href="#" className="social-link">
          <i className="fab fa-facebook-f social-icon facebook"></i>
          <span className="social-text">Facebook</span>
        </a>
        <a href="#" className="social-link">
          <i className="fab fa-google-plus-g social-icon google"></i>
          <span className="social-text">Google</span>
        </a>
        <a href="#" className="social-link">
          <i className="fab fa-linkedin-in social-icon linkendin"></i>
          <span className="social-text">Linkendin</span>
        </a>
      </div>
      <div className="other-form">
        <a className="link-text" href={ROUTES.SIGNIN}>
          Login to account
        </a>
      </div>
    </div>
  </div>
  )
}

export default SignUp