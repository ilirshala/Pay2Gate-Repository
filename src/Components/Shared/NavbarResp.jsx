import React, { useState } from "react";
import "../../Styles/Shared/NavbarResp.scss";
import logo from "../../Assets/svg/logo.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import prodList1 from "../../Assets/svg/prodList1.svg";
import prodList2 from "../../Assets/svg/prodList2.svg";
import prodList3 from "../../Assets/svg/prodList3.svg";
import prodList4 from "../../Assets/svg/prodList4.svg";
import MyButton from "./MyButton";
import { firstList, secondList, thirdList, fourthList } from "./solutionLinks";

function NavbarResp() {
  const [prodMenu, setProdMenu] = useState(false);
  const [solMenu, setSolMenu] = useState(false);
  return (
    <div className='navbarResp'>
      <div className='navResp__header'>
        <div className='navResp__logo'>
          <img src={logo} alt='' />
        </div>
        <h3>Pay2Gate</h3>
      </div>
      <div className='navRes__links'>
        <h4
          onClick={() => setProdMenu(!prodMenu)}
          style={{ borderBottom: prodMenu ? "transparent" : "" }}>
          Products
          <ExpandMoreIcon style={{ display: prodMenu ? "none" : "block" }} />
          <ExpandLessIcon style={{ display: prodMenu ? "block" : "none" }} />
        </h4>
        <ul style={{ display: prodMenu ? "block" : "none" }}>
          <li>
            <div className='imgLogo'>
              <img src={prodList1} alt='' />
            </div>
            <h4>To Sell</h4>
          </li>
          <li>
            <div className='imgLogo'>
              <img src={prodList2} alt='' />
            </div>
            <h4>To Subscribe</h4>
          </li>
          <li>
            <div className='imgLogo'>
              <img src={prodList3} alt='' />
            </div>
            <h4>To Monetize</h4>
          </li>
          <li>
            <div className='imgLogo'>
              <img src={prodList4} alt='' />
            </div>
            <h4>Add-ons</h4>
          </li>
        </ul>
        <h4
          onClick={() => setSolMenu(!solMenu)}
          style={{ borderBottom: solMenu ? "transparent" : "" }}>
          Solutions{" "}
          <ExpandMoreIcon style={{ display: solMenu ? "none" : "block" }} />
          <ExpandLessIcon style={{ display: solMenu ? "block" : "none" }} />
        </h4>
        <ul style={{ display: solMenu ? "block" : "none" }}>
          <h5>MONETIZE</h5>
          {firstList.map((item, key) => {
            return (
              <li key={key}>
                <div className='imgLogo'>
                  <img src={item.img} alt='' />
                </div>
                <h4>{item.title}</h4>
              </li>
            );
          })}
          <h5>MANAGE</h5>
          {secondList.map((item, key) => {
            return (
              <li key={key}>
                <div className='imgLogo'>
                  <img src={item.img} alt='' />
                </div>
                <h4>{item.title}</h4>
              </li>
            );
          })}
          <h5>OPTIMIZE</h5>
          {thirdList.map((item, key) => {
            return (
              <li key={key}>
                <div className='imgLogo'>
                  <img src={item.img} alt='' />
                </div>
                <h4>{item.title}</h4>
              </li>
            );
          })}
          <h5>B2B Commerce</h5>
          {fourthList.map((item, key) => {
            return (
              <li key={key}>
                <div className='imgLogo'>
                  <img src={item.img} alt='' />
                </div>
                <h4>{item.title}</h4>
              </li>
            );
          })}
        </ul>
        <h4>Features</h4>
        <h4>Pricing</h4>
        <h4>FAQ</h4>
        <h4>Contact</h4>
      </div>
      <div className='navResp__buttons'>
        <MyButton name='Log In' />
        <MyButton name='Sign Up' />
      </div>
    </div>
  );
}

export default NavbarResp;
