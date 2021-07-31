import React from "react";
import "../../../Styles/Pages/Pricing/PricingCard.scss";

function PricingCard({
  title,
  price,
  bgButton,
  colorButton,
  subtitle,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
}) {
  return (
    <div className='pricingCard'>
      <h4>LIFETIME</h4>
      <h2>{title}</h2>
      <h1>
        {price}
        <span>
          <p>$</p>
        </span>
      </h1>
      <h3>Per Successful Sale</h3>
      <div className='myButtonContainer'>
        <button style={{ background: `${bgButton}`, color: `${colorButton}` }}>
          Get Package
        </button>
      </div>
      <h6>{subtitle}</h6>
      <hr />
      <ul>
        <li>
          <img src={img1} alt='' />
          <h5>{p1}</h5>
        </li>
        <li>
          <img src={img2} alt='' />
          <h5>{p2}</h5>
        </li>
        <li>
          <img src={img3} alt='' />
          <h5>{p3}</h5>
        </li>
        <li>
          <img src={img4} alt='' />
          <h5>{p4}</h5>
        </li>
        <li>
          <img src={img5} alt='' />
          <h5>{p5}</h5>
        </li>
        <li>
          <img src={img6} alt='' />
          <h5>{p6}</h5>
        </li>
      </ul>
    </div>
  );
}

export default PricingCard;
