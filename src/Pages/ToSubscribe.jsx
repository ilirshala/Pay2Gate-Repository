import React from "react";
import Header from "../Components/Shared/Header";
import subBg from "../Assets/subBg.webp";
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
import toSubImg1 from "../Assets/toSubImg1.webp";
import toSubImg2 from "../Assets/toSubImg2.webp";
import toSubImg3 from "../Assets/toSubImg3.webp";
import toSubImg4 from "../Assets/toSubImg4.webp";

function ToSubscribe() {
  return (
    <div>
      <Header
        bgImg={subBg}
        title='Maximize
Recurring revenue.'
        paragraf='
The Subscription Package that Grows Customer Lifetime Value and Improves Retention. Here youll find everything you need to accept payments, manage subscriptions and prevent churn, all in all with the ultimate goal of having happy customers that keep renewing your service. '
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
        bgImg={toSubImg1}
        title='Sell Subscriptions Worldwide'
        paragraf='With global support for 9 payment methods with recurring billing functionality, and multi-language checkout in 29 languages, you are ready to scale your subscription business and sell internationally. Our tools and triggers will help you monetize across the subscription lifecycle and improve Average Order Value and Customer Lifetime Value.'
      />
      <ToSellFourth
        bgImg={toSubImg2}
        title='Use Smart Subscription Management Tools'
        paragraf='Set up simple or complex subscriptions plans - flat-rate, usage-based, hybrid - with any billing frequency you want - daily, weekly, monthly, or annually. Subscription enrollment is seamless, and your clients will get straightforward recurring billing.'
      />
      <ToSellFifth
        bgImg={toSubImg3}
        title='Get Up To 20% Revenue Uplift on Renewals'
        paragraf='With Pay2Gate is Revenue Recovery Tools you will have access to Account Updater, Retry Logic, and more involuntary and voluntary churn prevention services that will bring significant revenue increases. Existing clients using the tools have seen up to 20% revenue recovery.'
      />
      <ToSellSixth
        bgImg={toSubImg4}
        title='Get Insights via Subscription Reporting'
        paragraf='Manage your subscription-based business with out-of-the-box reporting on metrics that count: monthly/ annual recurring revenue, renewal and churn rate, active customers and subscriptions, and many more. Track renewal forecasts and cohort reporting. Additionally, you have the flexibility to create custom reporting specific to your needs.'
      />
      <LandingFifth displayRow2='none' />
    </div>
  );
}

export default ToSubscribe;
