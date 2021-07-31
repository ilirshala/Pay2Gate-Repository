import React from "react";
import "../../../Styles/Pages/Home/LandingSixth.scss";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function LandingSixth() {
  return (
    <div className='landingSixth'>
      <div className='landingSixth__left'></div>
      <div className='landingSixth__right'>
        <h1>
          We make it possible. You make it happen. Build for any customer
          journey.
        </h1>
        <p>
          Sound simple, but why take chances? Pay2Gate has the expertise to
          integrate emerging technologies, offering so over 100+ payment options
          that can mean the difference between satisfied customers and delighted
          ones.{" "}
        </p>
        <div className='learnMore'>
          <h4>Learn More</h4>
          <ArrowRightAltIcon />
        </div>
      </div>
    </div>
  );
}

export default LandingSixth;
