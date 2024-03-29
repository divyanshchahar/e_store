// IMPORTING FUNCTIONALITY
import React, { useState } from "react";
import { Link } from "react-router-dom";

// IMPORTING ASSETS
import usericon from "../assets/images/user-solid.svg";
import logoicon from "../assets/images/store-solid.svg";
import carticon from "../assets/images/cart-shopping-solid.svg";

//IMPORTING COMPONENTS
import useAPIData from "../utils/useAPIData";

const TopNavBar = () => {
  const url = "http://localhost:3001/product_data?_sort=name&_order=asc";
  const [searched, setSearched] = useState([]);

  const products = useAPIData(url);

  const handleChange = (e) => {
    if (e.target.value !== "") {
      const filtered = products.filter((item) => {
        return item.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setSearched(filtered);
    } else setSearched([]);
  };

  return (
    <div className="topnavbar">
      <img src={logoicon} alt={""} />

      <div className="searchbar">
        <input type="text" onChange={handleChange} />
        <button>Search</button>
      </div>

      {searched.length > 0 && (
        <div className="searchresults">
          {searched.map((item) => {
            return <p>{item.name}</p>;
          })}
        </div>
      )}

      <div className="topnavbarbuttons">
        <Link to="/cart">
          <img src={carticon} alt="" />
        </Link>

        <Link to="/user">
          <img src={usericon} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default TopNavBar;
