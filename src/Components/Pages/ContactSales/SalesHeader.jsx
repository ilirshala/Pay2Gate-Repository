import React from "react";
import "../../../Styles/Pages/ContactSales/SalesHeader.scss";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function SalesHeader() {
  return (
    <div className='salesHeader'>
      <div className='salestitle'>
        <h1>Let's talk</h1>
        <p>
          Got a question? Want to learn more about us? Get in touch. Complete
          the form and one of our commerce experts will contact you in the
          shortest time possible.
        </p>
      </div>
      <div className='salesHeader__row'>
        <div>
          <h3>Sales</h3>
          <p>
            Make your more to connected payments with the help of our advisors.
          </p>
          <div className='get'>
            <h4>Get in touch</h4>
            <ArrowRightAltIcon />
          </div>
        </div>
        <div>
          <h3>Merchant Support</h3>
          <p>
            Got a technical issue or need strategic advice? Our support team is
            here to help.
          </p>
          <div className='get'>
            <h4>Get Help</h4>
            <ArrowRightAltIcon />
          </div>
        </div>
        <div>
          <h3>Partnerships</h3>
          <p>
            Let's team up to boost productivity and accelerate business growth.
          </p>
          <div className='get'>
            <h4>Become a partner</h4>
            <ArrowRightAltIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesHeader;
