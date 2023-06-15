import React from "react";

const Nav = () => {
  return (
    <nav className="container">
      <div className="logo">SPM</div>
      <div className="container">
        <a
          href="https://www.linkedin.com/in/stuartpmcgee/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to LinkedIn profile, opens in a new window."
        >
          linkedin
        </a>
        <div>&ensp; &ensp;</div>
        <a
          href="https://github.com/StuPM"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to GitHub profile, opens in a new window."
        >
          github
        </a>
        <div>&ensp; &ensp;</div>
        <a href="#contact">contact</a>
      </div>
    </nav>
  );
};

export default Nav;
