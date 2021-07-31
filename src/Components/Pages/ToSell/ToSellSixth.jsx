import React from "react";
import "../../../Styles/Pages/ToSell/ToSellSixth.scss";

function ToSellSixth({ bgImg, title, paragraf }) {
  return (
    <div className='toSellSixth'>
      <div
        className='toSellSixth__left'
        style={{ backgroundImage: `url(${bgImg})` }}></div>
      <div className='toSellSixth__right'>
        <h1>{title}</h1>
        <p>{paragraf}</p>
      </div>
    </div>
  );
}

export default ToSellSixth;
