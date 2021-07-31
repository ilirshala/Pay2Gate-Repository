import React from "react";
import "../../../Styles/Pages/Blog/BlogThird.scss";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { Avatar } from "@material-ui/core";
import avatarImg from "../../../Assets/avatarImg.png";

function BlogThird() {
  return (
    <div className='blogThird'>
      <div className='blogThird__left'></div>
      <div className='blogThird__right'>
        <h1>How to Build a checkout experience that converts</h1>
        <p>
          What matters most to consumers at checkout, how personalizing the
          experience goes deeper than just offering alternative payment methods,
          and the emerging trends to watch.
        </p>
        <div className='postDate'>
          <CalendarTodayIcon />
          <h4>Mars 31, 2021</h4>
          <span>&#8226;</span>
          <h4>ECOMMERCE</h4>
          <span>&#8226;</span>
          <h4>PRODUCTS</h4>
        </div>
        <div className='personPost'>
          <Avatar src={avatarImg} />
          <div>
            <h3>Sander Kole</h3>
            <h4>Director IT at Divos.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogThird;
