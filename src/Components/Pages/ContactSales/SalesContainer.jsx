import React from "react";
import "../../../Styles/Pages/ContactSales/SalesContainer.scss";
import PartnerForm from "../ContactPartner/PartnerForm";
import sales1 from "../../../Assets/svg/sales1.svg";
import sales2 from "../../../Assets/svg/sales2.svg";
import sales3 from "../../../Assets/svg/sales3.svg";
import sales4 from "../../../Assets/svg/sales4.svg";
import sales5 from "../../../Assets/svg/sales5.svg";
import sales6 from "../../../Assets/svg/sales6.svg";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function SalesContainer() {
  return (
    <div className='salesContainer'>
      <div className='salesContainer__left'>
        <PartnerForm />
      </div>
      <div className='salesContainer__right'>
        <h1>We're with you</h1>
        <p>
          From Startups to Fortune 500 companies, over 20.00 companies over 180
          countries
        </p>
        <div className='salesContainer__col'>
          <div>
            <div className='img'>
              <img src={sales1} alt='' />
            </div>
            <h3>Go Global</h3>
          </div>
          <div>
            <div className='img'>
              <img src={sales2} alt='' />
            </div>
            <h3>Grow Revenues</h3>
          </div>
        </div>
        <div className='salesContainer__col'>
          <div>
            <div className='img'>
              <img src={sales3} alt='' />
            </div>
            <h3>Maximize CLV</h3>
          </div>
          <div>
            <div className='img'>
              <img src={sales4} alt='' />
            </div>
            <h3>New Distribution Channels</h3>
          </div>
        </div>
        <div className='salesContainer__col'>
          <div>
            <div className='img'>
              <img src={sales5} alt='' />
            </div>
            <h3>Accelerate Time to Market</h3>
          </div>
          <div>
            <div className='img'>
              <img src={sales6} alt='' />
            </div>
            <h3>Partner with Industry Leader</h3>
          </div>
        </div>
        <div className='learnMore'>
          <h3>Learn More</h3>
          <ArrowRightAltIcon />
        </div>
      </div>
    </div>
  );
}

export default SalesContainer;
