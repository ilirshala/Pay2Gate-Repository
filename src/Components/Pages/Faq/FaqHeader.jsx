import React from "react";
import "../../../Styles/Pages/Faq/FaqHeader.scss";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";

function FaqHeader() {
  return (
    <div className='faqHeader'>
      <h1>Frequently Asked Questions</h1>
      <div className='faqInput'>
        <SearchIcon />
        <input type='text' placeholder='Search for answers ' />
        <TuneIcon />
      </div>
    </div>
  );
}

export default FaqHeader;
