import React from "react";
import "../../../Styles/Pages/Login/LoginContainer.scss";
import MailIcon from "@material-ui/icons/Mail";
import MyButton from "../../Shared/MyButton";
import LockIcon from "@material-ui/icons/Lock";

function LoginContainer() {
  return (
    <div className='loginContainer'>
      <div className='loginForm'>
        <h1>Welcome Back</h1>
        <p>Enter your details and join us. </p>
        <form>
          <label>Email Address</label>
          <div className='emailInput'>
            <MailIcon />
            <input type='email' placeholder='Enter your email address' />
          </div>
          <label>Password</label>
          <div className='emailInput'>
            <LockIcon />
            <input type='password' placeholder='Enter your password' />
          </div>
          <div className='rememberMe'>
            <div>
              <input type='checkbox' />
              Remember me
            </div>
            <h4>Forgot your password?</h4>
          </div>
          <MyButton name='Login' />
          <h3>
            Don't have an Account? <span>SIGN UP</span>
          </h3>
        </form>
      </div>
    </div>
  );
}

export default LoginContainer;
