import React from "react";
import "../styles/Footer.scss";
import linkedIn from "../assets/logos/LI-In-Bug.png";

const Footer = () => {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/stuartpmcgee/" className="linkedIn">
        <div>Stuart Paul McGee &nbsp;</div>
        <img src={linkedIn} alt="LinkedIn logo" />
      </a>
      <div>&copy; 2023</div>
    </footer>
  );
};

export default Footer;
