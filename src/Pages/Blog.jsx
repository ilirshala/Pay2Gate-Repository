import React from "react";
import BlogContainer from "../Components/Pages/Blog/BlogContainer";
import BlogHeader from "../Components/Pages/Blog/BlogHeader";
import BlogLinks from "../Components/Pages/Blog/BlogLinks";
import BlogThird from "../Components/Pages/Blog/BlogThird";

function Blog() {
  return (
    <div>
      <BlogHeader />
      <BlogLinks link1='6px solid #FF8C00' />
      <BlogThird />
      <BlogContainer />
    </div>
  );
}

export default Blog;
