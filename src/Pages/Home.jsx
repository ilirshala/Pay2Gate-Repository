import React from "react";
import LandingEight from "../Components/Pages/Home/LandingEight";
import LandingFifth from "../Components/Pages/Home/LandingFifth";
import LandingFourth from "../Components/Pages/Home/LandingFourth";
import LandingSecond from "../Components/Pages/Home/LandingSecond";
import LandingSeventh from "../Components/Pages/Home/LandingSeventh";
import LandingSixth from "../Components/Pages/Home/LandingSixth";
import LandingThird from "../Components/Pages/Home/LandingThird";
import headerBg from "../Assets/headerBg.webp";

import Header from "../Components/Shared/Header";

function Home() {
  return (
    <div>
      <Header
        bgImg={headerBg}
        title='Payment Solutions. Build for Limitless Possibilities.'
        paragraf='A Solution Tailored for Your Business Needs. Your Payment Tech Partner.'
      />
      <LandingSecond
        title='Make Paying Simple'
        paragraf='Reduce barriers to purchase your product or service with our variety
          of payment features.'
      />
      <LandingThird />
      <LandingFourth />
      <LandingFifth
        title='Achieve Cross-Border Growth'
        paragraf=' Pay2Gate is an all-in-one global monetization platform, we have made
          buying easy for customers all over the world by offering them a
          payment method they prefer. With our over 450 payment methods, we help
          businesses grow in new markets.'
      />
      <LandingSixth />
      <LandingSeventh />
      <LandingEight />
    </div>
  );
}

export default Home;
