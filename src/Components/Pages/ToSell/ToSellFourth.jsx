import React from "react";
import "../../../Styles/Pages/ToSell/ToSellFourth.scss";

function ToSellFourth({ bgImg, title, paragraf }) {
  return (
    <div className='toSellFourth'>
      <div
        className='toSellFourth__left'
        style={{ backgroundImage: `url(${bgImg})` }}></div>
      <div className='toSellFourth__right'>
        <h1>{title}</h1>
        <p>{paragraf}</p>
      </div>
    </div>
  );
}

export default ToSellFourth;
