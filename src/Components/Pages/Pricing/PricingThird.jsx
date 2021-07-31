import React from "react";
import "../../../Styles/Pages/Pricing/PricingThird.scss";
import pricingThird1 from "../../../Assets/svg/pricingThird1.svg";
import pricingThird2 from "../../../Assets/svg/pricingThird2.svg";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function PricingThird() {
  return (
    <div className='pricingThird'>
      <div className='pricingCol'>
        <div className='pricingImg'>
          <img src={pricingThird1} alt='' />
        </div>
        <div className='otherThings'>
          <h3>Feature Comparison</h3>
          <p>
            See our complete Feature Comparison to find our which plan is best
            for you.
          </p>
          <div className='learnMore'>
            <h4>Learn More</h4>
            <ArrowRightAltIcon />
          </div>
        </div>
      </div>
      <div className='pricingCol'>
        <div className='pricingImg'>
          <img src={pricingThird2} alt='' />
        </div>
        <div className='otherThings'>
          <h3>Revenue Uplift</h3>
          <p>
            Simulate the Potential Revenue Uplift you could gain by selling
            online with Pay2Gate.
          </p>
          <div className='learnMore'>
            <h4>Learn More</h4>
            <ArrowRightAltIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingThird;
