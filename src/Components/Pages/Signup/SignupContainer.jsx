import React from "react";
import "../../../Styles/Pages/Signup/SignupContainer.scss";
import MyButton from "../../Shared/MyButton";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import LockIcon from "@material-ui/icons/Lock";
import loginLogo from "../../../Assets/loginLogo.png";
import listItem1 from "../../../Assets/svg/listItem1.svg";
import listItem2 from "../../../Assets/svg/listItem2.svg";
import listItem3 from "../../../Assets/svg/listItem3.svg";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function SignupContainer() {
  return (
    <div className='signupContainer'>
      <div className='signupForm'>
        <h1>Sign up on Pay2Gate</h1>
        <p>Enter your details and join us. </p>
        <form>
          <div className='fullName'>
            <div>
              <label>Enter Name</label>
              <div className='name'>
                <PersonIcon />
                <input type='text' placeholder='Enter your first name' />
              </div>
            </div>
            <div>
              <label> Enter lastname</label>
              <div className='surName'>
                <PersonIcon />
                <input type='text' placeholder='Enter your last name' />
              </div>
            </div>
          </div>
          <label>Enter email address</label>
          <div className='emailInput'>
            <MailIcon />
            <input type='text' placeholder='Enter your email address' />
          </div>
          <div className='fullName'>
            <div>
              <label>Password</label>
              <div className='name'>
                <LockIcon />
                <input type='password' placeholder='Enter your Password' />
              </div>
            </div>
            <div>
              <label> Password</label>
              <div className='surName'>
                <LockIcon />
                <input type='password' placeholder='Confirm your password' />
              </div>
            </div>
          </div>
          <label>Estimated monthly sales volume</label>
          <select>
            <option value='0'>No</option>
            <option value='1'>Yes</option>
          </select>
          <label>Already accepting credit card payments? </label>
          <select>
            <option value='0'>No</option>
            <option value='1'>Yes</option>
          </select>
          <label>Product Selection </label>
          <select id='productSelect'>
            <option value='0'>Select a product</option>
            <option value='1'>Product 1</option>
            <option value='2'>Product 2</option>
            <option value='3'>Product 3</option>
          </select>
          <div className='rememberMe'>
            <input type='checkbox' name='' id='' />
            <h4>
              I Agree to the <span>Terms of Service</span> and{" "}
              <span>Privacy Policy</span>
            </h4>
          </div>
          <MyButton name='Signup' />
          <h3>
            Do youy have an account? <span>SIGN IN</span>
          </h3>
        </form>
      </div>
      <div className='signup__others'>
        <div className='loginTitle'>
          <img src={loginLogo} alt='' />
          <p>
            <span>Pay</span>2Gate
          </p>
        </div>
        <h2>Set up your account now and enjoy the benefits. </h2>
        <div className='listItem'>
          <div className='imgLogo'>
            <img src={listItem1} alt='' />
          </div>
          <h4>Instant Access to Payment History</h4>
        </div>
        <div className='listItem'>
          <div className='imgLogo'>
            <img src={listItem2} alt='' />
          </div>
          <h4>Latest updates on all Services</h4>
        </div>
        <div className='listItem'>
          <div className='imgLogo'>
            <img src={listItem3} alt='' />
          </div>
          <h4>Accept Payments with Business Account</h4>
        </div>
        <div className='learnMore'>
          <h4>Learn More</h4>
          <ArrowRightAltIcon />
        </div>
      </div>
    </div>
  );
}

export default SignupContainer;
