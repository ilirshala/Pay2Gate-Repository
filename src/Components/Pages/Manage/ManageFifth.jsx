import React from "react";
import "../../../Styles/Pages/Manage/ManageFifth.scss";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function ManageFifth({
  leftTitle,
  rightTitle,
  leftParagraf,
  rightParagraf,
  leftImg,
  rightImg,
  color,
  leftP1,
  leftP2,
  leftP3,
  leftP4,
  rightP1,
  rightP2,
  rightP3,
  rightP4,
  displayIcon,
  textColor,
  leftBgColor,
  rightBgColor,
}) {
  return (
    <div className='manageFifth'>
      <div
        className='manageFifth__left'
        style={{ backgroundColor: `${leftBgColor}` }}>
        <div className='icon'>
          <img src={leftImg} alt='' />
        </div>
        <h1>{leftTitle}</h1>
        <p>{leftParagraf}</p>
        <div className='manageFifth__col'>
          <CheckCircleIcon style={{ color: `${color}` }} />
          <h3>{leftP1}</h3>
        </div>
        <div className='manageFifth__col'>
          <CheckCircleIcon style={{ color: `${color}` }} />
          <h3>{leftP2}</h3>
        </div>
        <div className='manageFifth__col'>
          <CheckCircleIcon style={{ color: `${color}` }} />
          <h3>{leftP3}</h3>
        </div>
        <div className='manageFifth__col'>
          <CheckCircleIcon
            style={{ color: `${color}`, display: `${displayIcon}` }}
          />
          <h3>{leftP4}</h3>
        </div>
      </div>
      <div
        className='manageFifth__right'
        style={{ backgroundColor: `${rightBgColor}`, color: `${textColor}` }}>
        <div className='icon'>
          <img src={rightImg} alt='' />
        </div>
        <h1>{rightTitle}</h1>
        <p>{rightParagraf}</p>
        <div className='manageFifth__col'>
          <CheckCircleIcon style={{ color: `${color}` }} />
          <h3>{rightP1}</h3>
        </div>
        <div className='manageFifth__col'>
          <CheckCircleIcon style={{ color: `${color}` }} />
          <h3>{rightP2}</h3>
        </div>
        <div className='manageFifth__col'>
          <CheckCircleIcon style={{ color: `${color}` }} />
          <h3>{rightP3}</h3>
        </div>
        <div className='manageFifth__col'>
          <CheckCircleIcon
            style={{ color: `${color}`, display: `${displayIcon}` }}
          />
          <h3>{rightP4}</h3>
        </div>
      </div>
    </div>
  );
}

export default ManageFifth;
