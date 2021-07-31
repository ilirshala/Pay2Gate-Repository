import React from "react";
import "../../Styles/Shared/Header.scss";
import MyButton from "./MyButton";

function Header({ bgImg, title, paragraf }) {
  return (
    <div className='header' style={{ backgroundImage: `url(${bgImg})` }}>
      <h1>{title}</h1>
      <p>{paragraf}</p>
      <MyButton name='Start Now' />
    </div>
  );
}

export default Header;
