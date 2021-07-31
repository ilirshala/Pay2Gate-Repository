import React, { useState } from "react";
import "../../../Styles/Pages/Faq/FaqContainer.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function FaqContainer() {
  const [showList, setShowList] = useState(false);
  const [showList2, setShowList2] = useState(false);
  const [showList3, setShowList3] = useState(false);
  const [showList4, setShowList4] = useState(false);
  const [showList5, setShowList5] = useState(false);
  const [showList6, setShowList6] = useState(false);
  return (
    <div className='faqContainer'>
      <div className='faqRow'>
        <div className='faqCol' onClick={() => setShowList(!showList)}>
          <div className='faqColHeader'>
            <h4>How does Pay2Gate handle payments ?</h4>
            <div
              className='icon'
              style={{
                backgroundColor: showList ? "#ff8c00" : "white",
              }}>
              <ExpandMoreIcon
                style={{ display: showList ? "none" : "block" }}
              />
              <ExpandLessIcon
                style={{
                  display: showList ? "block" : "none",
                  color: showList ? "white" : "",
                }}
              />
            </div>
          </div>
          <p style={{ display: showList ? "block" : "none" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            atque nobis dolores repellat quae saepe? Minus mollitia nam aliquid
            sequi.
          </p>
        </div>
        <div className='faqCol' onClick={() => setShowList2(!showList2)}>
          <div className='faqColHeader'>
            <h4>
              How does Pay2Gate compare to other checkout providers on the
              market ?
            </h4>
            <div
              className='icon'
              style={{
                backgroundColor: showList2 ? "#ff8c00" : "white",
              }}>
              <ExpandMoreIcon
                style={{ display: showList2 ? "none" : "block" }}
              />
              <ExpandLessIcon
                style={{
                  display: showList2 ? "block" : "none",
                  color: showList2 ? "white" : "",
                }}
              />
            </div>
          </div>
          <p style={{ display: showList2 ? "block" : "none" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            atque nobis dolores repellat quae saepe? Minus mollitia nam aliquid
            sequi.
          </p>
        </div>
        <div className='faqCol' onClick={() => setShowList3(!showList3)}>
          <div className='faqColHeader'>
            <h4>
              Does Pay2Gate work with PayPal, ApplePay, and other digital
              wallets ?
            </h4>
            <div
              className='icon'
              style={{
                backgroundColor: showList3 ? "#ff8c00" : "white",
              }}>
              <ExpandMoreIcon
                style={{ display: showList3 ? "none" : "block" }}
              />
              <ExpandLessIcon
                style={{
                  display: showList3 ? "block" : "none",
                  color: showList3 ? "white" : "",
                }}
              />
            </div>
          </div>
          <p style={{ display: showList3 ? "block" : "none" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            atque nobis dolores repellat quae saepe? Minus mollitia nam aliquid
            sequi.
          </p>
        </div>
        <div className='faqCol' onClick={() => setShowList4(!showList4)}>
          <div className='faqColHeader'>
            <h4>Can we customize Pay2Gate checkout experience ?</h4>
            <div
              className='icon'
              style={{
                backgroundColor: showList4 ? "#ff8c00" : "white",
              }}>
              <ExpandMoreIcon
                style={{ display: showList4 ? "none" : "block" }}
              />
              <ExpandLessIcon
                style={{
                  display: showList4 ? "block" : "none",
                  color: showList4 ? "white" : "",
                }}
              />
            </div>
          </div>
          <p style={{ display: showList4 ? "block" : "none" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            atque nobis dolores repellat quae saepe? Minus mollitia nam aliquid
            sequi.
          </p>
        </div>
        <div className='faqCol' onClick={() => setShowList5(!showList5)}>
          <div className='faqColHeader'>
            <h4>
              When a merchant chooses Pay2Gate for checkout, who and what does
              Pay2Gate replace ?{" "}
            </h4>
            <div
              className='icon'
              style={{
                backgroundColor: showList5 ? "#ff8c00" : "white",
              }}>
              <ExpandMoreIcon
                style={{ display: showList5 ? "none" : "block" }}
              />
              <ExpandLessIcon
                style={{
                  display: showList5 ? "block" : "none",
                  color: showList5 ? "white" : "",
                }}
              />
            </div>
          </div>
          <p style={{ display: showList5 ? "block" : "none" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            atque nobis dolores repellat quae saepe? Minus mollitia nam aliquid
            sequi.
          </p>
        </div>
        <div className='faqCol' onClick={() => setShowList6(!showList6)}>
          <div className='faqColHeader'>
            <h4>What's the experience for our return customers ?</h4>
            <div
              className='icon'
              style={{
                backgroundColor: showList6 ? "#ff8c00" : "white",
              }}>
              <ExpandMoreIcon
                style={{ display: showList6 ? "none" : "block" }}
              />
              <ExpandLessIcon
                style={{
                  display: showList6 ? "block" : "none",
                  color: showList6 ? "white" : "",
                }}
              />
            </div>
          </div>
          <p style={{ display: showList6 ? "block" : "none" }}>
            Shoppers can save their shipping and payment information simply at
            the end of the checkout. When those shoppers return to your site,
            Pay2Gate recognizes the email or phone number, allowing for a
            secure, single-click checkout that doesn't require a password.
            Shoppers who leverage single-click checkout complete order at a 50%
            higher rate than shoppers who go through guest checkout.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FaqContainer;
