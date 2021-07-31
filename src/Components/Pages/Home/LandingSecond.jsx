import React from "react";
import "../../../Styles/Pages/Home/LandingSecond.scss";
import PayingSimple from "../../Shared/PayingSimple";
import { list1, list2 } from "./payingList";

function LandingSecond({ title, paragraf, displayRow2 }) {
  return (
    <div className='landingSecond'>
      <div className='landingSec__title'>
        <h2>{title}</h2>
        <p>{paragraf}</p>
      </div>
      <div className='landingSec__row'>
        {list1.map((item, key) => {
          return (
            <PayingSimple
              img={item.img}
              title={item.title}
              paragraf={item.paragraf}
              key={key}
            />
          );
        })}
      </div>
      <div className='landingSec__row' style={{ display: `${displayRow2}` }}>
        {list2.map((item, key) => {
          return (
            <PayingSimple
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

export default LandingSecond;
