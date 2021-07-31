import React from "react";
import solutionManageBg from "../Assets/solutionManageBg.webp";
import ManageSecond from "../Components/Pages/Manage/ManageSecond";
import ManageThird from "../Components/Pages/Manage/ManageThird";
import Header from "../Components/Shared/Header";
import {
  cardList1,
  cardList2,
  bannerList,
  cardList3,
  cardList4,
} from "../Components/Pages/Manage/manageList";
import ManageFourth from "../Components/Pages/Manage/ManageFourth";
import ManageFifth from "../Components/Pages/Manage/ManageFifth";

function SolManage() {
  return (
    <div>
      <Header
        bgImg={solutionManageBg}
        title='Manage your global
ecommerce business.'
        paragraf='As your business grows, we give you the control
you need over your ecommerce program providing
stability and predictability as you scale you scale
your business.'
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
      {cardList3.map((card, key) => {
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
      {cardList4.map((card, key) => {
        return (
          <ManageThird
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
    </div>
  );
}

export default SolManage;
