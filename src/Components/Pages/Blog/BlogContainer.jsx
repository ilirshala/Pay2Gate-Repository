import React from "react";
import "../../../Styles/Pages/Blog/BlogContainer.scss";
import BlogCard from "./BlogCard";
import { firstRow, secondRow, thirdRow } from "./cardList";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import blogCard3 from "../../../Assets/blogCard3.webp";
import blogCard4 from "../../../Assets/blogCard4.webp";

function BlogContainer() {
  return (
    <div className='blogContainer'>
      <div className='blogContainer__left'>
        <div className='blogContainer__row'>
          {firstRow.map((item, key) => {
            return (
              <BlogCard
                bgHeader={item.bgHeader}
                title={item.title}
                paragraf={item.paragraf}
                key={key}
              />
            );
          })}
        </div>
        <div className='blogContainer__row'>
          {secondRow.map((item, key) => {
            return (
              <BlogCard
                bgHeader={item.bgHeader}
                title={item.title}
                paragraf={item.paragraf}
                key={key}
              />
            );
          })}
        </div>
        <div className='blogContainer__row'>
          {thirdRow.map((item, key) => {
            return (
              <BlogCard
                bgHeader={item.bgHeader}
                title={item.title}
                paragraf={item.paragraf}
                key={key}
              />
            );
          })}
        </div>
      </div>
      <div className='blogContainer__right'>
        <h1>Recomended Articles</h1>
        <div className='blogContainer__card'>
          <div className='leftImage'></div>
          <div className='rightThings'>
            <h3>5 reasons why card payments are</h3>
            <p>
              Why do card payments fail? And what can
              ckdvnievuienvuierviueufnefiew f jeif neuir{" "}
            </p>
            <div>
              <CalendarTodayIcon />
              <h4>Mars 31, 2021</h4>
            </div>
          </div>
        </div>
        <div className='blogContainer__card'>
          <div
            className='leftImage'
            style={{ backgroundImage: `url(${blogCard3})` }}></div>
          <div className='rightThings'>
            <h3>5 reasons why card payments are</h3>
            <p>
              Why do card payments fail? And what can
              ckdvnievuienvuierviueufnefiew f jeif neuir{" "}
            </p>
            <div>
              <CalendarTodayIcon />
              <h4>Mars 31, 2021</h4>
            </div>
          </div>
        </div>
        <div className='blogContainer__card'>
          <div
            className='leftImage'
            style={{ backgroundImage: `url(${blogCard4})` }}></div>
          <div className='rightThings'>
            <h3>5 reasons why card payments are</h3>
            <p>
              Why do card payments fail? And what can
              ckdvnievuienvuierviueufnefiew f jeif neuir{" "}
            </p>
            <div>
              <CalendarTodayIcon />
              <h4>Mars 31, 2021</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContainer;
