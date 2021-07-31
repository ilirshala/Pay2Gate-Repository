import React, { useEffect, useRef, useState } from "react";
import "../../Styles/Shared/Navbar.scss";
import logo from "../../Assets/svg/logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import SolutionsMenu from "./SolutionsMenu";
import ProductsMenu from "./ProductsMenu";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import NavbarResp from "./NavbarResp";
import CloseIcon from "@material-ui/icons/Close";

function Navbar() {
  const history = useHistory();
  const [scroll, setScroll] = useState(false);
  const [solutionsMenu, setSolutionsMenu] = useState(false);
  const [productsMenu, setProductsMenu] = useState(false);
  const [navbarResp, setNavbarResp] = useState(false);
  const wrapperRef = useRef(null);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const openSolution = () => {
    setSolutionsMenu(!solutionsMenu);
    setProductsMenu(false);
  };
  const openProduct = () => {
    setProductsMenu(!productsMenu);
    setSolutionsMenu(false);
  };

  // mobile navbar click outside close menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setNavbarResp(navbarResp);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div
        className='solutionsMegaMenu'
        style={{ display: solutionsMenu ? "block" : "" }}
        onMouseLeave={() => {
          setSolutionsMenu(!solutionsMenu);
        }}>
        <SolutionsMenu />
      </div>
      <div
        className='productsMegaMenu'
        style={{ display: productsMenu ? "block" : "none" }}
        onMouseLeave={() => {
          setProductsMenu(!productsMenu);
        }}>
        <ProductsMenu />
      </div>
      <div
        ref={wrapperRef}
        className='mobileNavbar'
        style={{ transform: navbarResp ? "translateX(0)" : "" }}>
        <NavbarResp />
      </div>
      <div className={scroll ? "navbarActive navbar" : "navbar"}>
        <div className='navbarLogo' onClick={() => history.push("/")}>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <h2>
            Pay<span>2Gate</span>
          </h2>
        </div>
        <div className='navbarList'>
          <ul>
            <li onMouseOver={openProduct}>Products</li>
            <li onMouseOver={openSolution}>Solutions</li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li>
              <Link to='/contact-sales'>Contact</Link>
            </li>
            <li>
              <SearchIcon />
            </li>
          </ul>
        </div>
        <div className='navbarButtons'>
          <button onClick={() => history.push("/login")}>Login</button>
          <button onClick={() => history.push("/signup")}>Signup</button>
        </div>
        <div className='burgerIcon'>
          <MenuRoundedIcon
            onClick={() => setNavbarResp(!navbarResp)}
            style={{ display: navbarResp ? "none" : "block" }}
          />
          <CloseIcon
            onClick={() => setNavbarResp(!navbarResp)}
            style={{ display: navbarResp ? "block" : "none" }}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
