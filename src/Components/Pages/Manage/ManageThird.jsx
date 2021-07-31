import React from "react";
import "../../../Styles/Pages/Manage/ManageThird.scss";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function ManageThird({
  img,
  title,
  paragraf,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  p1,
  p2,
  p3,
  p4,
  p5,
}) {
  return (
    <div className='manageThird'>
      <div className='manageThird__left'>
        <h1>{title}</h1>
        <p>{paragraf}</p>
        <div className='manageLeft__col'>
          {icon1}
          <h3>{p1}</h3>
        </div>
        <div className='manageLeft__col'>
          {icon2}
          <h3>{p2}</h3>
        </div>
        <div className='manageLeft__col'>
          {icon3}
          <h3>{p3}</h3>
        </div>
        <div className='manageLeft__col'>
          {icon4}
          <h3>{p4}</h3>
        </div>
        <div className='manageLeft__col'>
          {icon5}
          <h3>{p5}</h3>
        </div>
        <div className='learnMore'>
          <h3>Learn More</h3>
          <ArrowRightAltIcon />
        </div>
      </div>
      <div
        className='manageThird__right'
        style={{ backgroundImage: `url(${img})` }}></div>
    </div>
  );
}

export default ManageThird;
