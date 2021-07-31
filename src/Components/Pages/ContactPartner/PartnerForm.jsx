import React from "react";
import "../../../Styles/Pages/ContactPartner/PartnerForm.scss";
import MyButton from "../../Shared/MyButton";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import BusinessIcon from "@material-ui/icons/Business";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LanguageIcon from "@material-ui/icons/Language";
import PublicIcon from "@material-ui/icons/Public";

function PartnerForm() {
  return (
    <div className='partnerForm'>
      <div className='signupForm'>
        <h1>Contact Sales</h1>
        <p>
          Discuss your connect payment needs with one of our global advisors{" "}
        </p>
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
          <label>Email address</label>
          <div className='emailInput'>
            <MailIcon />
            <input type='text' placeholder='Enter your email address' />
          </div>
          <label>Job Title</label>
          <div className='emailInput'>
            <WorkOutlineIcon />
            <input type='text' placeholder='Enter your job title' />
          </div>
          <label>Company</label>
          <div className='emailInput'>
            <BusinessIcon />
            <input type='text' placeholder='Enter your company' />
          </div>
          <label>Phone Number</label>
          <div className='emailInput'>
            <PhoneAndroidIcon />
            <input type='text' placeholder='Enter your phone number' />
          </div>
          <label>Country</label>
          <div className='emailInput'>
            <PublicIcon />
            <input type='text' placeholder='Select a country' />
          </div>
          <label>Company website</label>
          <div className='emailInput'>
            <LanguageIcon />
            <input type='text' placeholder='Enter your company website' />
          </div>

          <label>Current monthly processing volume (USD) </label>
          <select id='productSelect'>
            <option value='0'>Select monthly volume</option>
            <option value='1'> 1</option>
            <option value='2'> 2</option>
            <option value='3'> 3</option>
          </select>
          <label htmlFor=''>Message</label>
          <div className='emailInput'>
            <MailIcon />
            <input
              type='text'
              placeholder='Please tell us about your payment needs'
            />
          </div>
          <div className='rememberMe'>
            <input type='checkbox' name='' id='' />
            <h4>
              I Agree to the <span>Terms of Service</span> and{" "}
              <span>Privacy Policy</span>
            </h4>
          </div>
          <MyButton name='Send' />
        </form>
      </div>
    </div>
  );
}

export default PartnerForm;
