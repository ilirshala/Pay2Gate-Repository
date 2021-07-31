import React from "react";
import "../../../Styles/Pages/ToSell/ToSellThird.scss";

function ToSellThird({ bgImg, title, paragraf }) {
  return (
    <div className='toSellThird'>
      <div className='toSellThird__left'>
        <h1>{title}</h1>
        <p>{paragraf}</p>
      </div>
      <div
        className='toSellThird__right'
        style={{ backgroundImage: `url(${bgImg})` }}></div>
    </div>
  );
}

export default ToSellThird;
