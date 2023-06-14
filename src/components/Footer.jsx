import React from "react";
import "../styles/Footer.scss";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="container">
      <Contact />
      <div className="footerBar container">
        <a
          href="https://www.linkedin.com/in/stuartpmcgee/"
          className="linkedIn"
        >
          Designed by me, Stuart Paul McGee.
        </a>
        <div>&copy; 2023</div>
      </div>
    </footer>
  );
};

export default Footer;
