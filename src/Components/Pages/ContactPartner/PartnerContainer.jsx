import React from "react";
import "../../../Styles/Pages/ContactPartner/PartnerContainer.scss";
import PartnerForm from "./PartnerForm";

function PartnerContainer() {
  return (
    <div className='partnerContainer'>
      <div className='partnerContainer__left'>
        <h1>We're with you</h1>
        <p>
          From Startups to Fortune 500 companies, over 20.00 companies over 180
          countries
        </p>
      </div>
      <div className='partnerContainer__right'>
        <PartnerForm />
      </div>
    </div>
  );
}

export default PartnerContainer;
