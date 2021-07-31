import React from "react";
import Header from "../Components/Shared/Header";
import monetizeHeader from "../Assets/monetizeHeader.webp";
import ManageThird from "../Components/Pages/Manage/ManageThird";
import ManageFourth from "../Components/Pages/Manage/ManageFourth";
import {
  cardList1,
  cardList2,
  bannerList,
} from "../Components/Pages/Monetize/monetizeList";

import ManageFifth from "../Components/Pages/Manage/ManageFifth";
import MonetizeLast from "../Components/Pages/Monetize/MonetizeLast";

function SolMonetize() {
  return (
    <div>
      <Header
        bgImg={monetizeHeader}
        title='Monetize your
digital offerings.'
        paragraf='We help you manage all of the complexities
associated with different pricing models, billing
scenarios and payment methods so you can
maximize recurring revenue for your business.'
      />
      {cardList1.map((card, key) => {
        return (
          <ManageThird
            img={card.img}
            title={card.title}
            paragraf={card.paragraf}
            icon1={card.icon1}
            icon2={card.icon2}
            icon3={card.icon3}
            icon4={card.icon4}
            icon5={card.icon5}
            p1={card.p1}
            p2={card.p2}
            p3={card.p3}
            p4={card.p4}
            p5={card.p5}
            key={key}
          />
        );
      })}
      {cardList2.map((card, key) => {
        return (
          <ManageFourth
            img={card.img}
            title={card.title}
            paragraf={card.paragraf}
            icon1={card.icon1}
            icon2={card.icon2}
            icon3={card.icon3}
            icon4={card.icon4}
            p1={card.p1}
            p2={card.p2}
            p3={card.p3}
            p4={card.p4}
            key={key}
          />
        );
      })}
      {bannerList.map((item, key) => {
        return (
          <ManageFifth
            leftTitle={item.leftTitle}
            rightTitle={item.rightTitle}
            leftParagraf={item.leftParagraf}
            rightParagraf={item.rightParagraf}
            leftImg={item.leftImg}
            rightImg={item.rightImg}
            color={item.color}
            leftP1={item.leftP1}
            leftP2={item.leftP2}
            leftP3={item.leftP3}
            rightP1={item.rightP1}
            rightP2={item.rightP2}
            rightP3={item.rightP3}
            displayIcon={item.displayIcon}
            key={key}
          />
        );
      })}
      <MonetizeLast />
    </div>
  );
}

export default SolMonetize;
