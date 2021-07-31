import React from "react";
import "../../Styles/Shared/InfiniteSlider.scss";
import uber from "../../Assets/uber.png";
import mango from "../../Assets/mango.png";
import booking from "../../Assets/booking.png";
import ebay from "../../Assets/ebay.png";
import socks from "../../Assets/socks.png";
import spotify from "../../Assets/spotify.png";

function InfiniteSlider() {
  return (
    <div className='slider'>
      <div className='slide-track'>
        <div className='slide'>
          <img src={uber} alt='' />
        </div>
        <div className='slide mango'>
          <img src={mango} alt='' />
        </div>
        <div className='slide booking'>
          <img src={booking} alt='' />
        </div>
        <div className='slide'>
          <img src={ebay} alt='' />
        </div>
        <div className='slide'>
          <img src={socks} alt='' />
        </div>
        <div className='slide'>
          <img src={spotify} alt='' />
        </div>
        <div className='slide'>
          <img src={uber} alt='' />
        </div>
        <div className='slide'>
          <img src={mango} alt='' />
        </div>
        <div className='slide'>
          <img src={booking} alt='' />
        </div>
        <div className='slide'>
          <img src={ebay} alt='' />
        </div>
        <div className='slide'>
          <img src={socks} alt='' />
        </div>
        <div className='slide'>
          <img src={spotify} alt='' />
        </div>
      </div>
      <div className='slide-track'>
        <div className='slide'>
          <img src={uber} alt='' />
        </div>
        <div className='slide mango'>
          <img src={mango} alt='' />
        </div>
        <div className='slide booking'>
          <img src={booking} alt='' />
        </div>
        <div className='slide'>
          <img src={ebay} alt='' />
        </div>
        <div className='slide'>
          <img src={socks} alt='' />
        </div>
        <div className='slide'>
          <img src={spotify} alt='' />
        </div>
        <div className='slide'>
          <img src={uber} alt='' />
        </div>
        <div className='slide'>
          <img src={mango} alt='' />
        </div>
        <div className='slide'>
          <img src={booking} alt='' />
        </div>
        <div className='slide'>
          <img src={ebay} alt='' />
        </div>
        <div className='slide'>
          <img src={socks} alt='' />
        </div>
        <div className='slide'>
          <img src={spotify} alt='' />
        </div>
      </div>
    </div>
  );
}

export default InfiniteSlider;
