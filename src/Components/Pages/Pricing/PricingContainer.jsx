import React from "react";
import "../../../Styles/Pages/Pricing/PricingContainer.scss";
import PricingCard from "./PricingCard";
import { list1, list2, list3, list4 } from "./priceList";

function PricingContainer() {
  return (
    <div className='pricingContainer'>
      {list1.map((list, key) => {
        return (
          <PricingCard
            title={list.title}
            price={list.price}
            bgButton={list.bgButton}
            colorButton={list.colorButton}
            subtitle={list.subtitle}
            img1={list.img1}
            img2={list.img2}
            img3={list.img3}
            img4={list.img4}
            img5={list.img5}
            img6={list.img6}
            p1={list.p1}
            p2={list.p2}
            p3={list.p3}
            p4={list.p4}
            p5={list.p5}
            p6={list.p6}
            key={key}
          />
        );
      })}
      {list2.map((list, key) => {
        return (
          <PricingCard
            title={list.title}
            price={list.price}
            bgButton={list.bgButton}
            colorButton={list.colorButton}
            subtitle={list.subtitle}
            img1={list.img1}
            img2={list.img2}
            img3={list.img3}
            img4={list.img4}
            img5={list.img5}
            img6={list.img6}
            p1={list.p1}
            p2={list.p2}
            p3={list.p3}
            p4={list.p4}
            p5={list.p5}
            p6={list.p6}
            key={key}
          />
        );
      })}
      {list3.map((list, key) => {
        return (
          <PricingCard
            title={list.title}
            price={list.price}
            bgButton={list.bgButton}
            colorButton={list.colorButton}
            subtitle={list.subtitle}
            img1={list.img1}
            img2={list.img2}
            img3={list.img3}
            img4={list.img4}
            img5={list.img5}
            img6={list.img6}
            p1={list.p1}
            p2={list.p2}
            p3={list.p3}
            p4={list.p4}
            p5={list.p5}
            p6={list.p6}
            key={key}
          />
        );
      })}
      {list4.map((list, key) => {
        return (
          <PricingCard
            title={list.title}
            price={list.price}
            bgButton={list.bgButton}
            colorButton={list.colorButton}
            subtitle={list.subtitle}
            img1={list.img1}
            img2={list.img2}
            img3={list.img3}
            img4={list.img4}
            img5={list.img5}
            img6={list.img6}
            p1={list.p1}
            p2={list.p2}
            p3={list.p3}
            p4={list.p4}
            p5={list.p5}
            p6={list.p6}
            key={key}
          />
        );
      })}
    </div>
  );
}

export default PricingContainer;
