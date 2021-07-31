import React from "react";
import Header from "../Components/Shared/Header";
import monetizeBg from "../Assets/monetizeBg.webp";
import ToSellSecond from "../Components/Pages/ToSell/ToSellSecond";
import PublicIcon from "@material-ui/icons/Public";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ToSellThird from "../Components/Pages/ToSell/ToSellThird";
import ToSellFourth from "../Components/Pages/ToSell/ToSellFourth";
import ToSellFifth from "../Components/Pages/ToSell/ToSellFifth";
import ToSellSixth from "../Components/Pages/ToSell/ToSellSixth";
import LandingFifth from "../Components/Pages/Home/LandingFifth";
import toMonetizeImg1 from "../Assets/toMonetizeimg1.webp";
import toMonetizeImg2 from "../Assets/toMonetizeimg2.webp";
import toMonetizeImg3 from "../Assets/toMonetizeimg3.webp";
import toMonetizeImg4 from "../Assets/toMonetizeimg4.webp";

function ToMonetize() {
  return (
    <div>
      <Header
        bgImg={monetizeBg}
        title='All-in-one Solution
for Digital Good Sales'
        paragraf='If you are selling digital goods internationally, look no further. This is the all-in-one monetization package that helps global businesses grow digital commerce revenue streams. We help you sell your products and services worldwide, and maximize your conversion and retention '
      />
      <ToSellSecond
        icon1={<PublicIcon />}
        icon2={<ShoppingCartIcon />}
        icon3={<LocationOnIcon />}
        icon4={<PeopleAltIcon />}
        p1='Start Selling in 200+
Countries & Territories'
        p2='Integrate with Any
of 120+ Carts'
        p3='Retain More Customers
and Reduce Churn'
        p4='Retain More Customers
and Reduce Churn'
      />
      <ToSellThird
        bgImg={toMonetizeImg1}
        title='Go Global. Act Local.'
        paragraf='We simplify digital commerce to help you grow your business worldwide, through deep localization and easily configurable purchase flows across channels. We put at your disposal 45+ payment methods, 100+ billing currencies, 33 languages, and 24x7 shopper support. With Pay2Gate it is easy to set up and start selling, while scaling operations is seamless.'
      />
      <ToSellFourth
        bgImg={toMonetizeImg2}
        title='Optimize the Buying Experience'
        paragraf='From acquisition to renewals, Pay2Gate provides off-the-shelf optimization tools and services to help you improve conversion, retention, and average order value. The platform tools will assist you in delivering the right engagement at the right moment, for an optimal customer experience. To Monetize helps you reduce time-to-market and improve time-to-revenue.'
      />
      <ToSellFifth
        bgImg={toMonetizeImg3}
        title='Maximize Client Lifetime Value'
        paragraf='To Monetize provides visibility and control over every stage in the subscription lifecycle. Sell subscriptions easily across channels and use tools to convert trial users to paying customers, while steering basic users toward more advanced services. Boost renewal rates and prevent involuntary and voluntary churn with our award-winning Revenue Recovery Tools. Results: up to 20% revenue uplift!'
      />
      <ToSellSixth
        bgImg={toMonetizeImg4}
        title='Leverage the Power of Partners'
        paragraf='The Partners Add-on is available to expand your reach through affiliates as well as through distributors and resellers. Your products and services will benefit from a wider visibility, using additional marketing and distribution channels. Better visibility has a real impact on the bottom line: on average, affiliates in our network increase sales by 25%.'
      />
      <LandingFifth displayRow2='none' />
    </div>
  );
}

export default ToMonetize;
