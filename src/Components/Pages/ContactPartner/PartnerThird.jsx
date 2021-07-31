import React from "react";
import "../../../Styles/Pages/ContactPartner/PartnerThird.scss";
import { list1, list2 } from "./partnerList";

import PayingSimple from "../../Shared/PayingSimple";

function PartnerThird({ displayRow2 }) {
  return (
    <div className='partnerThird'>
      <div className='partnerThird__title'>
        <h2>Included in All Plans</h2>
        <p>
          Which ever cleverly customizable plan you decide to go with, we made
          sure that all packages have these basic benefits included.
        </p>
      </div>
      <div className='partnerThird__row'>
        {list1.map((item, key) => {
          return (
            <PayingSimple
              img={item.img}
              title={item.title}
              paragraf={item.paragraf}
              bgColor={item.bgColor}
              pBold={item.pBold}
              color={item.color}
              key={key}
            />
          );
        })}
      </div>
      <div className='partnerThird__row' style={{ display: `${displayRow2}` }}>
        {list2.map((item, key) => {
          return (
            <PayingSimple
              img={item.img}
              title={item.title}
              paragraf={item.paragraf}
              bgColor={item.bgColor}
              pBold={item.pBold}
              color={item.color}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PartnerThird;
