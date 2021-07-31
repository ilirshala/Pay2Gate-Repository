import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Shared/SolutionsMenu.scss";
import { firstList, secondList, thirdList, fourthList } from "./solutionLinks";

function SolutionsMenu() {
  return (
    <div className='solutionsMenu'>
      <div className='solutionsMenuHeader'>
        <h4>
          <Link to='/solution-monetize'>MONETIZE</Link>
        </h4>
        <h4>
          <Link to='/solution-manage'>MANAGE</Link>
        </h4>
        <h4>
          <Link to='/solution-optimize'>OPTIMIZE</Link>
        </h4>
        <h4>
          <Link to='/'>B2B Commerce</Link>
        </h4>
      </div>
      <div className='solutionsList'>
        <ul>
          {firstList.map((item, key) => {
            return (
              <li key={key}>
                <div className='logoImg'>
                  <img src={item.img} alt='' />
                </div>
                {item.title}
              </li>
            );
          })}
        </ul>
        <ul>
          {secondList.map((item, key) => {
            return (
              <>
                <li key={key}>
                  <div className='logoImg'>
                    <img src={item.img} alt='' />
                  </div>
                  {item.title}
                </li>
              </>
            );
          })}
          <li></li>
        </ul>
        <ul>
          {thirdList.map((item, key) => {
            return (
              <li key={key}>
                <div className='logoImg'>
                  <img src={item.img} alt='' />
                </div>
                {item.title}
              </li>
            );
          })}
        </ul>
        <ul>
          {fourthList.map((item, key) => {
            return (
              <li key={key}>
                <div className='logoImg'>
                  <img src={item.img} alt='' />
                </div>
                {item.title}
              </li>
            );
          })}
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default SolutionsMenu;
