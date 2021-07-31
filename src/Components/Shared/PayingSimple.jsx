import React from "react";
import "../../Styles/Shared/PayingSimple.scss";

function PayingSimple({ img, title, paragraf, pBold, color, bgColor }) {
  return (
    <div className='payingSimple'>
      <div className='payImg' style={{ background: `${bgColor}` }}>
        <img src={img} alt='' />
      </div>
      <div className='payTitle'>
        <h3>{title}</h3>
        <p style={{ fontWeight: `${pBold}`, color: `${color}` }}>{paragraf}</p>
      </div>
    </div>
  );
}

export default PayingSimple;
