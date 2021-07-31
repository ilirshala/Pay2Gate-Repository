import React from "react";
import "../../Styles/Shared/MyButton.scss";

function MyButton({ name, onClick, className }) {
  return (
    <button onClick={onClick} className={className} id='myButton'>
      {name}
    </button>
  );
}

export default MyButton;
