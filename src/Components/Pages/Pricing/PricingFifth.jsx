import React from "react";
import "../../../Styles/Pages/Pricing/PricingFifth.scss";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { Avatar } from "@material-ui/core";
import avatar1 from "../../../Assets/svg/avatar1.svg";

function PricingFifth() {
  return (
    <div className='pricingFifth'>
      <div className='pricingFifth__right'>
        <div className='pricingFifth__card'>
          <div className='landingCard__orange'>
            <FormatQuoteIcon />
          </div>
          <p>
            We have been working together with Pay2Gate for years now and we
            have never had any issues regarding it. I never had to call them on
            issues. Pay2Gate simply offers the best quality we can find, and
            being the best quality platform is very important for us.
          </p>
          <div className='personTestimonial'>
            <Avatar src={avatar1} />
            <div>
              <h4>Sander Kole</h4>
              <span>Director IT at Divos.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingFifth;
