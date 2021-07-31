import React from "react";
import "../../../Styles/Pages/Blog/BlogLinks.scss";

function BlogLinks({ link1, link2, link3, link4, link5, link6 }) {
  return (
    <div className='blogLinks'>
      <ul>
        <li style={{ borderBottom: `${link1}` }}>All posts</li>
        <li style={{ borderBottom: `${link2}` }}>Ecommerce</li>
        <li style={{ borderBottom: `${link3}` }}>Announcments</li>
        <li style={{ borderBottom: `${link4}` }}>Payments</li>
        <li style={{ borderBottom: `${link5}` }}>Technology</li>
        <li style={{ borderBottom: `${link6}` }}>Product</li>
      </ul>
    </div>
  );
}

export default BlogLinks;
