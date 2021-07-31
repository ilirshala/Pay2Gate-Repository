import React from "react";
import FaqContainer from "../Components/Pages/Faq/FaqContainer";
import LandingEight from "../Components/Pages/Home/LandingEight";
import LandingFifth from "../Components/Pages/Home/LandingFifth";
import ManageSecond from "../Components/Pages/Manage/ManageSecond";
import PricingContainer from "../Components/Pages/Pricing/PricingContainer";
import PricingFifth from "../Components/Pages/Pricing/PricingFifth";
import PricingFourth from "../Components/Pages/Pricing/PricingFourth";
import PricingHeader from "../Components/Pages/Pricing/PricingHeader";
import PricingThird from "../Components/Pages/Pricing/PricingThird";

function Pricing() {
  return (
    <div>
      <PricingHeader />
      <PricingContainer />
      <PricingThird />
      <ManageSecond />
      <LandingFifth
        title='Achieve Cross-Border Growth'
        paragraf=' Pay2Gate is an all-in-one global monetization platform, we have made
          buying easy for customers all over the world by offering them a
          payment method they prefer. With our over 450 payment methods, we help
          businesses grow in new markets.'
      />
      <PricingFourth />
      <PricingFifth />
      <LandingEight />
      <FaqContainer />
    </div>
  );
}

export default Pricing;
