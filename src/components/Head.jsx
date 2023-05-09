import React from "react";
import "../styles/Head.scss";

const Head = () => {
  return (
    <header>
      <div className="headerContainer">
        <h1>Hi!</h1>
        <p>React | Javascript | CSS 3 | HTML5 </p>
        <p>My name is Stuart McGee and I am a frontend developer.</p>
        <div className="links">
          <a href="https://www.linkedin.com/in/stuartpmcgee/">Linkedin</a>
          <a href="https://github.com/StuPM">Github</a>
          <a href="mailto:stuartpmcgee@gmail.com">Email</a>
          <a href="mailto:test@test.com">CV</a>
        </div>
        <p>Activly seaking a developer role.</p>
      </div>
      <h3>Scroll down to view my portfolio.</h3>
    </header>
  );
};

export default Head;
