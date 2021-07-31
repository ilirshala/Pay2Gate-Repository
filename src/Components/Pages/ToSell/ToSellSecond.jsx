import React from "react";
import "../../../Styles/Pages/ToSell/ToSellSecond.scss";

import CreditCardIcon from "@material-ui/icons/CreditCard";

function ToSellSecond({
  icon1,
  icon2,
  icon3,
  icon4,
  p1,
  p2,
  p3,
  p4,
  displayCol,
}) {
  return (
    <div className='toSellSecond'>
      <div className='toSell__col'>
        <div className='toSell__img'>{icon1}</div>
        <p>{p1}</p>
      </div>
      <div className='toSell__col'>
        <div className='toSell__img'>{icon2}</div>
        <p>{p2}</p>
      </div>
      <div className='toSell__col'>
        <div className='toSell__img'>{icon3}</div>
        <p>{p3}</p>
      </div>
      <div className='toSell__col' style={{ display: `${displayCol}` }}>
        <div className='toSell__img'>{icon4}</div>
        <p>{p4}</p>
      </div>
    </div>
  );
}

export default ToSellSecond;
