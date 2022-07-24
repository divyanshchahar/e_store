// IMPORTING FUNCTIONALITY
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <ul>
        <Link to="/termsofuse">Terms of Use</Link>
        <Link to="/cookiepolicy">Cookie Policy</Link>
        <Link to="/privacypolicy">Privacy Policy</Link>
      </ul>
    </div>
  );
};

export default Footer;
