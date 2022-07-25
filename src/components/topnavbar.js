// IMPORTING FUNCTIONALITY
import React from "react";
import { Link } from "react-router-dom";

// IMPORTING ASSETS
import usericon from "../assets/images/user-solid.svg";
import logoicon from "../assets/images/store-solid.svg";
import carticon from "../assets/images/cart-shopping-solid.svg";

const TopNavBar = () => {
  return (
    <div className="topnavbar">
      <img src={logoicon} alt={""} />

      <div className="searchbar">
        <input type="text" />
        <button>Search</button>
      </div>

      <div>
        <Link to="/cart">
          <img src={carticon} alt="" />
        </Link>

        <Link to="/loginpage">
          <img src={usericon} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default TopNavBar;
