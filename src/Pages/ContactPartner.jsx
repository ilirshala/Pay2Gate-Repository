import React from "react";
import contactPartner from "../Assets/contactPartner.webp";
import PartnerContainer from "../Components/Pages/ContactPartner/PartnerContainer";
import PartnerThird from "../Components/Pages/ContactPartner/PartnerThird";
import LandingEight from "../Components/Pages/Home/LandingEight";
import LandingFifth from "../Components/Pages/Home/LandingFifth";
import LandingSecond from "../Components/Pages/Home/LandingSecond";
import Header from "../Components/Shared/Header";

function ContactPartner() {
  return (
    <div>
      <Header
        bgImg={contactPartner}
        title='Empower Your
Customers
To Do More'
        paragraf='Reach our customer base and access our optimized marked
strategies by partnering with us. Save time, do more, faster.'
      />
      <LandingEight />
      <LandingSecond
        title='Why partner with us'
        paragraf='To boost productivity, accelerate business growth and foster supportive
partnerships. Together, we will create our best work..'
        displayRow2='none'
      />
      <LandingFifth
        title='Achieve Cross-Border
Growth'
        paragraf=' Pay2Gate is an all-in-one global monetization platform, we have made buying easy
for customers all over the world by offering them a payment method they prefer.
With our over 450 payment methods, we help businesses grow in new markets.'
        displayRow2='none'
      />
      <PartnerContainer />
      <PartnerThird />
    </div>
  );
}

export default ContactPartner;
