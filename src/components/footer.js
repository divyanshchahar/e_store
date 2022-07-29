// IMPORTING FUNCTIONALITY
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/termsofuse">Terms of Use</Link>
      <Link to="/cookiepolicy">Cookie Policy</Link>
      <Link to="/privacypolicy">Privacy Policy</Link>
    </div>
  );
};

export default Footer;
