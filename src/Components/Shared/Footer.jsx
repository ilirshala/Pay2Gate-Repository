import React from "react";
import "../../Styles/Shared/Footer.scss";
import MyButton from "./MyButton";
import { firstList, secondList, thirdList, fourthList } from "./footerLinks";
import logo from "../../Assets/svg/logo.svg";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import FooterLanguage from "./FooterLanguage";
import facebook from "../../Assets/svg/facebook.svg";
import instagram from "../../Assets/svg/instagram.svg";
import linkedin from "../../Assets/svg/linkedin.svg";
import twitter from "../../Assets/svg/twitter.svg";
import twitter2 from "../../Assets/svg/twitter2.svg";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [company, setCompany] = useState(false);
  const [products, setProducts] = useState(false);
  const [solutions, setSolutions] = useState(false);
  const [help, setHelp] = useState(false);

  return (
    <div className='footer'>
      <div className='footerHeader'>
        <h1>Don't waste time to reach your goals!</h1>
        <p>Join over 50.000 happy users now.</p>
        <MyButton name='Start Now' />
      </div>
      <hr />
      <div className='footer__links'>
        <div>
          <ul>
            <h4 onClick={() => setCompany(!company)}>
              Company <ExpandMoreOutlinedIcon />
            </h4>

            {firstList.map((list, key) => {
              return (
                <li key={key} style={{ display: company ? "block" : "" }}>
                  <Link to={list.path}>{list.link}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul>
            <h4 onClick={() => setProducts(!products)}>
              Products <ExpandMoreOutlinedIcon />{" "}
            </h4>

            {secondList.map((list, key) => {
              return (
                <li key={key} style={{ display: products ? "block" : "" }}>
                  <Link to={list.path}>{list.link}</Link>
                </li>
              );
            })}
            <br />
            <li></li>
          </ul>
        </div>
        <div>
          <ul>
            <h4 onClick={() => setSolutions(!solutions)}>
              Solutions <ExpandMoreOutlinedIcon />{" "}
            </h4>

            {thirdList.map((list, key) => {
              return (
                <li style={{ display: solutions ? "block" : "" }} key={key}>
                  <Link to={list.path}>{list.link}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul>
            <h4 onClick={() => setHelp(!help)}>
              Help <ExpandMoreOutlinedIcon />
            </h4>

            {fourthList.map((list, key) => {
              return (
                <li style={{ display: help ? "block" : "" }} key={key}>
                  <Link to={list.path}>{list.link}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='contactUs'>
        <h3>Don't waste time to reach your goals!</h3>
        <div className='emailAddress'>
          <input type='text' placeholder='Enter your email address' />
          <MyButton name='Subscribe' />
        </div>
      </div>
      <hr />
      <div className='company'>
        <div className='navbarLogo'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <h2>
            Pay<span>2Gate.com</span>
          </h2>
        </div>
        <div className='otherThings'>
          <div className='phoneCall'>
            <PhoneAndroidOutlinedIcon />
            <span>+0800 648 57 658</span>
          </div>
          <div>
            <FooterLanguage />
          </div>
        </div>
      </div>
      <hr />
      <div className='copyright'>
        <div>
          <h4> &copy;2020 Pay2gate. All Rights Reserved.</h4>
          <h4>Privacy Policy</h4>
          <h4>Terms & Conditions</h4>
        </div>
        <div>
          <img src={facebook} alt='' />
          <img src={instagram} alt='' />
          <img src={twitter2} alt='' />
          <img src={linkedin} alt='' />
          <img src={twitter} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Footer;
