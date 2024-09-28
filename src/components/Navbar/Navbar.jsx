import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets"; // Correct path to assets
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>
      
      <ul className="navbar-menu">
        <Link to='/'
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >Home
        </Link>
        <a 
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          <a href="#food-display">Commodities</a>
        </a>
        <a
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          <a href="#app-download">Mobile App</a>
        </a>
        <a
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          <a href="#footer">Contact Us</a>
        </a>
        <a 
          href="#faq" // Use a regular anchor for FAQ
          onClick={() => setMenu("faq")} 
          className={menu === "faq" ? "active" : ""}
        >
          FAQ
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
          {/* <Link to='/cart'><img src={assets.basket_icon} alt="basket icon" /></Link> */}
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
