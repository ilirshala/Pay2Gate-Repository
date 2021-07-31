import React from "react";
import Header from "../Components/Shared/Header";
import aboutBg from "../Assets/aboutBg.webp";
import AboutSecond from "../Components/Pages/About/AboutSecond";
import AboutThird from "../Components/Pages/About/AboutThird";
import AboutFourth from "../Components/Pages/About/AboutFourth";
import ToSellSixth from "../Components/Pages/ToSell/ToSellSixth";
import aboutFifthImg from "../Assets/aboutFifthImg.webp";
import aboutSixthImg from "../Assets/aboutSixthImg.webp";
import LandingFifth from "../Components/Pages/Home/LandingFifth";
import ToSellThird from "../Components/Pages/ToSell/ToSellThird";
import LandingEight from "../Components/Pages/Home/LandingEight";
import LandingSeventh from "../Components/Pages/Home/LandingSeventh";

function About() {
  return (
    <div>
      <Header
        bgImg={aboutBg}
        title='Move money simply
and securely'
        paragraf='Pay2gate was founded on the simple idea that
moving money should be affordable, easy & fast.
We were tired of the high fees and manual processes
associated with initiating payments. We knew there
had to be a better way-so we build one.'
      />
      <AboutSecond />
      <AboutThird />
      <AboutFourth />
      <ToSellSixth
        bgImg={aboutFifthImg}
        title='Fluid, flexible
financial tools'
        paragraf='Our end-to-end platform helps you move faster, instead of holding you back. With flexible tools, granular data and deep insights, it’s the payments tech that unleashes your potential. So you can innovate, '
      />
      <LandingFifth displayRow2='none' />
      <ToSellThird
        bgImg={aboutSixthImg}
        title='Feature-ready
Finance'
        paragraf='Supporting thousands of businesses around the world. We’re proud to partner with everyone from startups to global superbrands, processing payments in over 150 currencies. And we’re just getting started. By cutting through complexity, we’re empowering businesses to challenge the status quo, create unlimited opportunities –– and change the world. The future is connected finance.'
      />
      <LandingSeventh />
      <LandingEight />
    </div>
  );
}

export default About;
