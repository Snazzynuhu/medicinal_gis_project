import React from "react";
import "./Footer.css";

const Footer = () => {
  const now = new Date().getFullYear();
  return (
    <footer>
      <p>
        &copy; copyright  {now}. all rights reserved developed by{" "}
        <span>
          <a href="https://harunanuhu-portfolio.netlify.app/" target="_blank">
            haruna nuhu
          </a>
        </span> 
        <br/>
        thesis for the award of the Postgraduate Diploma in RS/GIS(ARCSSTEE).
      </p>
    </footer>
  );
};

export default Footer;
