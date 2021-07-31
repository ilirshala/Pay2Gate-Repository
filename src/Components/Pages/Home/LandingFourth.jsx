import React from "react";
import "../../../Styles/Pages/Home/LandingFourth.scss";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import TvIcon from "@material-ui/icons/Tv";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function LandingFourth() {
  return (
    <div className='landingFourth'>
      <div className='landingFourth__left'></div>
      <div className='landingFourth__right'>
        <h1>Understand What Your Customers Really Want.</h1>
        <p>
          Get a better understanding of your entire business with in-depth
          insights and reporting all in one place.
        </p>
        <div className='landingFourth__row'>
          <div className='landingFourth__col'>
            <div className='icon'>
              <ListAltOutlinedIcon />
            </div>
            <h4>Daily Tasks</h4>
            <p>Easily complete tasks like refunds.</p>
          </div>
          <div className='landingFourth__col'>
            <div className='icon'>
              <TvIcon />
            </div>
            <h4>In-depth Reports</h4>
            <p>Translate data into detailed reports.</p>
          </div>
        </div>
        <div className='learnMore'>
          <h4>Learn More</h4>
          <ArrowRightAltIcon />
        </div>
      </div>
    </div>
  );
}

export default LandingFourth;
