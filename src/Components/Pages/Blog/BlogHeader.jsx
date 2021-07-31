import React from "react";
import "../../../Styles/Pages/Blog/BlogHeader.scss";
import SearchIcon from "@material-ui/icons/Search";

function BlogHeader() {
  return (
    <div className='blogHeader'>
      <h1>Blog</h1>
      <p>
        Dive into the world of payment technology. Explore insights. And stay up
        to date with product company news.
      </p>
      <div className='faqInput'>
        <SearchIcon />
        <input type='text' placeholder='Search for answers ' />
      </div>
    </div>
  );
}

export default BlogHeader;
