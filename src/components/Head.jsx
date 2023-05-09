import React from "react";
import "../styles/Head.scss";

const Head = () => {
  return (
    <header>
      <div className="headerContainer">
        <h1>Hi!</h1>
        <p>I'm Stuart and I'm looking for a Junior front end developer role.</p>

        <div className="links">
          <a href="https://www.linkedin.com/in/stuartpmcgee/">Linkedin</a>
          <a href="https://github.com/StuPM">Github</a>
          <a href="mailto:stuartpmcgee@gmail.com">Email</a>
          <a href="mailto:test@test.com">CV</a>
        </div>

        <h3>Scroll down to view my portfolio.</h3>
      </div>
    </header>
  );
};

export default Head;
