import React from "react";
import "../../../Styles/Pages/Pricing/PricingFourth.scss";
import MyButton from "../../Shared/MyButton";

function PricingFourth() {
  return (
    <div className='pricingFourth'>
      <div className='pricingFourth__left'>
        <h1>Our Pricing Philosophy</h1>
        <p>
          We're focused on value and visibility. Right now, you're researching
          and comparing subscription billing solutions before making the best
          business decision. Have a conversation about your business
          requirements, we'll deliver a full cost breakdown.{" "}
        </p>
        <MyButton name='Contact Us' />
      </div>
      <div className='pricingFourth__right'></div>
    </div>
  );
}

export default PricingFourth;
