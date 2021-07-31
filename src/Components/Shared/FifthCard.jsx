import React from "react";
import "../../Styles/Shared/FifthCard.scss";

function FifthCard({ img, title, paragraf }) {
  return (
    <div className='fifthCard'>
      <div className='icon'>
        <img src={img} alt='' />
      </div>
      <h4>{title}</h4>
      <p>{paragraf}</p>
    </div>
  );
}

export default FifthCard;
