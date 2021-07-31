import React from "react";
import "../../../Styles/Pages/Home/LandingFifth.scss";
import FifthCard from "../../Shared/FifthCard";
import { fifthList1, fifthList2 } from "./payingList";

function LandingFifth({ displayRow2, paragraf, title }) {
  return (
    <div className='landingFifth'>
      <div className='landingFifth__title'>
        <h2>{title}</h2>
        <p>{paragraf}</p>
      </div>
      <div className='landingFifth__row'>
        {fifthList1.map((item, key) => {
          return (
            <FifthCard
              img={item.img}
              title={item.title}
              paragraf={item.paragraf}
              key={key}
            />
          );
        })}
      </div>
      <div className='landingFifth__row' style={{ display: `${displayRow2}` }}>
        {fifthList2.map((item, key) => {
          return (
            <FifthCard
              img={item.img}
              title={item.title}
              paragraf={item.paragraf}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LandingFifth;
