import React from "react";
import Header from "../Components/Shared/Header";
import optimizeHeader from "../Assets/optimizeHeader.webp";
import ManageSecond from "../Components/Pages/Manage/ManageSecond";
import ManageFourth from "../Components/Pages/Manage/ManageFourth";
import ManageFifth from "../Components/Pages/Manage/ManageFifth";

import {
  bannerList,
  bannerList2,
  cardList1,
  cardList2,
} from "../Components/Pages/Optimize/optimizeLists";
import ManageThird from "../Components/Pages/Manage/ManageThird";

function SolOptimize() {
  return (
    <div>
      <Header
        bgImg={optimizeHeader}
        title='Optimize recurring
revenue streams.'
        paragraf='With our cloud-based technology and global
success services, we identify opportunities for
simplifying signup and renewals, streamlining
billing events and reducing churn.'
      />
      <ManageSecond />
      {cardList1.map((card, key) => {
        return (
          <ManageThird
            img={card.img}
            title={card.title}
            paragraf={card.paragraf}
            icon1={card.icon1}
            icon2={card.icon2}
            icon3={card.icon3}
            p1={card.p1}
            p2={card.p2}
            p3={card.p3}
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
      {bannerList2.map((item, key) => {
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
            textColor={item.textColor}
            rightBgColor={item.rightBgColor}
            leftBgColor={item.leftBgColor}
            key={key}
          />
        );
      })}
    </div>
  );
}

export default SolOptimize;
