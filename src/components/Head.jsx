import React from "react";
import "../styles/Head.scss";
import hello from "../assets/hello.png";
import Nav from "./Nav";

const Head = () => {
  return (
    <header>
      <div className="container">
        <Nav />
        <div className="headerContainer">
          <div className="headerTitle">
            <h1>Hello! &nbsp;</h1>
            <img src={hello} alt="Waving hand." />
          </div>

          <p>React | Javascript | CSS 3 | HTML5 </p>
          <p>I'm Stuart McGee and I'm a frontend developer.</p>
          <div className="links">
            <a href="https://www.linkedin.com/in/stuartpmcgee/">Linkedin</a>
            <div>&ensp; | &ensp;</div>
            <a href="https://github.com/StuPM">Github</a>
            <div>&ensp; | &ensp;</div>
            <a href="mailto:stuartpmcgee@gmail.com">Email</a>
            <div>&ensp; | &ensp;</div>
            <a href="mailto:test@test.com">CV</a>
          </div>
          <p>Actively seaking a developer role.</p>
        </div>
        <h3>Scroll down to view my portfolio.</h3>
      </div>
    </header>
  );
};

export default Head;
