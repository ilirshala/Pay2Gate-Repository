import React from "react";
import "../../../Styles/Pages/Blog/BlogCard.scss";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

function BlogCard({ bgHeader, title, paragraf }) {
  return (
    <div className='blogCard'>
      <div
        className='blogCard__header'
        style={{ backgroundImage: `url(${bgHeader})` }}></div>
      <div className='blogPost__date'>
        <CalendarTodayIcon />
        <h4>Mars 31, 2021</h4>
        <span>&#8226;</span>
        <h4>ECOMMERCE</h4>
        <span>&#8226;</span>
        <h4>PRODUCTS</h4>
      </div>
      <h3>{title}</h3>
      <p>{paragraf}</p>
    </div>
  );
}

export default BlogCard;
