import React from "react";
import "../../../Styles/Pages/Manage/ManageSecond.scss";
import { list1, list2 } from "./manageList";
import PayingSimple from "../../Shared/PayingSimple";

function ManageSecond() {
  return (
    <div className='manageSecond'>
      <div className='manageSecond__row'>
        {list1.map((item, key) => {
          return (
            <PayingSimple
              key={key}
              img={item.img}
              title={item.title}
              paragraf={item.paragraf}
              bgColor={item.displayColor}
              pBold={item.pbold}
              color={item.color}
            />
          );
        })}
      </div>
      <div className='manageSecond__row'>
        {list2.map((item, key) => {
          return (
            <PayingSimple
              key={key}
              img={item.img}
              title={item.title}
              paragraf={item.paragraf}
              bgColor={item.displayColor}
              pBold={item.pbold}
              color={item.color}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ManageSecond;
