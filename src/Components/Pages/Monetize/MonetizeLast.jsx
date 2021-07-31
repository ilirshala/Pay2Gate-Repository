import React from "react";
import "../../../Styles/Pages/Monetize/MonetizeLast.scss";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function MonetizeLast() {
  return (
    <div className='monetizeLast'>
      <div className='monetizeLast__left'></div>
      <div className='monetizeLast__right'>
        <h1>Fraud Prevention</h1>
        <p>
          With a leading automatic screening technology and expert fraud
          analysts, we review every single charge.
        </p>
        <div className='monetizeLast__col'>
          <CheckCircleIcon />
          <h3>Review all charges with leading screening technology</h3>
        </div>
        <div className='monetizeLast__col'>
          <CheckCircleIcon />
          <h3>
            Use behavioral data to eliminate human bias, reducing false
            positives
          </h3>
        </div>
        <div className='monetizeLast__col'>
          <CheckCircleIcon />
          <h3>
            Flag orders that require manual review by highly-trained analysts
          </h3>
        </div>
        <div className='monetizeLast__col'>
          <CheckCircleIcon />
          <h3>
            Identify fraud patterns specific to your business and update your
            anti-fraud algorithms
          </h3>
        </div>
        <div className='learnMore'>
          <h3>Learn More</h3>
          <ArrowRightAltIcon />
        </div>
      </div>
    </div>
  );
}

export default MonetizeLast;
