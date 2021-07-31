import React from "react";
import "../../../Styles/Pages/ToSell/ToSellFifth.scss";

function ToSellFifth({ bgImg, title, paragraf }) {
  return (
    <div className='toSellFift'>
      <div className='toSellFifth__left'>
        <h1>{title}</h1>
        <p>{paragraf}</p>
      </div>
      <div
        className='toSellFifth__right'
        style={{ backgroundImage: `url(${bgImg})` }}></div>
    </div>
  );
}

export default ToSellFifth;
