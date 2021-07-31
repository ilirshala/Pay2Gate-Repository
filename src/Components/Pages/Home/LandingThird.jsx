import React from "react";
import "../../../Styles/Pages/Home/LandingThird.scss";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function LandingThird() {
  return (
    <div className='landingThird'>
      <div className='landingThird__left'>
        <div className='landingThirdLeft__con'>
          <h1>Being Much More Than a POS System.</h1>
          <p>
            We are helping all kinds of businesses succeed on their own terms.
            Pay2Gate is proven solution that makes it easy for everyone to
            handle payments and run their day-to-day operations, from reporting
            and inventory to invoicing and eCommerce.
          </p>
          <div className='learnMore'>
            <h4>Learn More</h4>
            <ArrowRightAltIcon />
          </div>
        </div>
      </div>
      <div className='landingThird__right'></div>
    </div>
  );
}

export default LandingThird;
