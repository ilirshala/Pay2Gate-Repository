import React from "react";
import "../../Styles/Shared/ProductsMenu.scss";
import prodList1 from "../../Assets/svg/prodList1.svg";
import prodList2 from "../../Assets/svg/prodList2.svg";
import prodList3 from "../../Assets/svg/prodList3.svg";
import prodList4 from "../../Assets/svg/prodList4.svg";
import { Link } from "react-router-dom";

function ProductsMenu() {
  return (
    <div className='productsMenu'>
      <div className='productsMenu__left'>
        <div className='prodMenu__header'>
          <h4>PRODUCTS OVERVIEW</h4>
          <h3>Show All</h3>
        </div>
        <div className='prodMenu__list'>
          <ul>
            <li>
              <Link to='/toSell'>
                <div className='logoImg'>
                  <img src={prodList1} alt='' />
                </div>
                <div>
                  <h4>To Sell</h4>
                  <p>Accept mobile and online payments from buyers worldwide</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/toSubscribe'>
                <div className='logoImg'>
                  <img src={prodList2} alt='' />
                </div>
                <div>
                  <h4>To Subscribe</h4>
                  <p>
                    Subscription management solution to maximize recurring
                    revenue
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/toMonetize'>
                <div className='logoImg'>
                  <img src={prodList3} alt='' />
                </div>
                <div>
                  <h4>To Monetize</h4>
                  <p>Full commerce solution built for digital goods sales</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <div className='logoImg'>
                  <img src={prodList4} alt='' />
                </div>
                <div>
                  <h4>Add-ons</h4>
                  <p>Additional services to boost online sales</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='productsMenu__right'>
        <h3>HOW WE WORK</h3>
        <div>
          <h4>Pricing</h4>
          <p>Transparent pricing for all businesses</p>
        </div>
        <h4 className='secondh'>Company</h4>
        <p className='secondP'>Support</p>
        <p className='secondP'>Blog</p>
        <p className='secondP'>Faq</p>
        <p className='secondP'>Contact</p>
      </div>
    </div>
  );
}

export default ProductsMenu;
