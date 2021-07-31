import Header from "../Components/Shared/Header";
import React from "react";
import sellBg from "../Assets/sellBg.webp";
import ToSellSecond from "../Components/Pages/ToSell/ToSellSecond";
import PublicIcon from "@material-ui/icons/Public";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LanguageIcon from "@material-ui/icons/Language";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ToSellThird from "../Components/Pages/ToSell/ToSellThird";
import ToSellFourth from "../Components/Pages/ToSell/ToSellFourth";
import ToSellFifth from "../Components/Pages/ToSell/ToSellFifth";
import ToSellSixth from "../Components/Pages/ToSell/ToSellSixth";
import LandingFifth from "../Components/Pages/Home/LandingFifth";
import toSellImg from "../Assets/toSellImg.webp";
import toSellImg2 from "../Assets/toSellImg2.webp";
import toSellFifth from "../Assets/toSellFifth.webp";
import toSellFifth2 from "../Assets/toSellFifth2.webp";

function ToSell() {
  return (
    <div>
      <Header
        bgImg={sellBg}
        title='Take on the World.
Anything you need to sell.'
        paragraf='We enable merchants to accept mobile and online payments from buyers worldwide.
Our payment processing is seamless, safe, reliable, no matter where you are on the map.'
      />
      <ToSellSecond
        icon1={<PublicIcon />}
        icon2={<ShoppingCartIcon />}
        icon3={<LanguageIcon />}
        p1='Start Selling in 200+
Countries & Territories'
        p2='Integrate with Any
of 120+ Carts'
        p3='Provide the Localized
Experience Buyers Expect'
        displayCol='none'
      />
      <ToSellThird
        bgImg={toSellImg}
        title='Get ready for global online sales.'
        paragraf=' We enable merchants to accept mobile and online payments from buyers
          worldwide. Our payment processing is seamless, safe, and reliable, no
          matter where you are on the map . Youll have access to a Commerce
          Dashboard, which provides instant insights into your sales and
          customer health metrics.'
      />
      <ToSellFourth
        bgImg={toSellImg2}
        title='Sell any product or service, digital or physical.'
        paragraf='No matter what type of products you are selling - digital, physical or
          services, on a one-time or recurring basis - our commerce platform
          will help you get ready for global online sales in no time.'
      />
      <ToSellFifth
        bgImg={toSellFifth}
        title='Improve revenue with localization and smart tools.'
        paragraf='Provide your global customers with the seamless, mobile-friendly,
          localized buying experience they expect. Increase your sales volume
          through promotions and other merchandising tools, such as coupons and
          discounts. Our shopping cart templates and localization tools will
          help boost those conversion rates.'
      />
      <ToSellSixth
        bgImg={toSellFifth2}
        title='Sell subscriptions without headaches.'
        paragraf='  WithPay2Gate To Sell package, you can also sell subscriptions with no
          worries about recurring billing. Our Account Updater services are on
          stand-by to recover potentially lost revenue and boost your bottom
          line. For advanced subscriptions capabilities, check out To Subscribe
          and To Monetize.'
      />
      <LandingFifth displayRow2='none' />
    </div>
  );
}

export default ToSell;
