import React from "react";
import "./Footer.css";

const Footer = () => {
  const now = new Date().getFullYear();
  return (
    <footer>
      <p>
        &copy; copyright {now}. all rights reserved developed by{" "}
        <span>
          <a href="https://harunanuhu-portfolio.netlify.app/" target="_blank" rel="noreferrer">
            haruna nuhu
          </a>
        </span>{" "}
        supervised by{" "}
        <span>
          <a
            href="https://geography.oauife.edu.ng/instructor/dr-d-o-baloye/"
            target="_blank" rel="noreferrer"
          >
            Dr. David O. BALOYE
          </a>
        </span>
        <br />
        thesis for the award of the Postgraduate Diploma in RS/GIS(ARCSSTEE).
      </p>
    </footer>
  );
};

export default Footer;
