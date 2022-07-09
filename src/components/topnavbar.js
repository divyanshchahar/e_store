// IMPORTING FUNCTIONALITY
import React from "react";

// IMPORTING IMAGES
import usericon from "../assets/images/user-solid.svg";
import logoicon from "../assets/images/store-solid.svg";
import carticon from "../assets/images/cart-shopping-solid.svg";

const TopNavBar = () => {
  return (
    <div className="topnavbar">
      <img src={logoicon} alt={""} />

      <input type="text" />
      <button>Search</button>

      <button>
        cart
        <img src={carticon} alt="" />
      </button>

      <button>
        user
        <img src={usericon} alt="" />
      </button>
    </div>
  );
};

export default TopNavBar;
