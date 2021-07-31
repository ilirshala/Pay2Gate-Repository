import React from "react";
import "../../../Styles/Pages/About/AboutThird.scss";
import { list1, list2 } from "./aboutCardList";
import PayingSimple from "../../Shared/PayingSimple";

function AboutThird() {
  return (
    <div className='aboutThird'>
      <div className='aboutThirdRow'>
        {list1.map((item, key) => {
          return (
            <PayingSimple
              key={key}
              img={item.img}
              title={item.title}
              paragraf={item.paragraf}
              pBold={item.pbold}
              color={item.color}
            />
          );
        })}
      </div>
      <div className='aboutThirdRow'>
        {list2.map((item, key) => {
          return (
            <PayingSimple
              key={key}
              img={item.img}
              title={item.title}
              paragraf={item.paragraf}
              pBold={item.pbold}
              color={item.color}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AboutThird;
