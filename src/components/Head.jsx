import React from "react";
import "../styles/Head.scss";
import Nav from "./Nav";
import hello from "../assets/hello.png";
import me from "../assets/meCutOut.png";

const Head = () => {
  return (
    <header>
      <div className="container">
        <div className="headerMain">
          <Nav />
          <div className="container">
            <div className="headerText">
              <div className="title">
                <h1>Hello! &nbsp;</h1>
                <img src={hello} alt="Waving hand." />
              </div>

              <div>React | JavaScript | CSS 3 | HTML5 </div>
              <p>
                I'm Stuart McGee and I'm a frontend developer. Please scroll
                down to see my projects!
              </p>

              <div className="links">
                <a href="https://www.linkedin.com/in/stuartpmcgee/">linkedin</a>
                <div>&ensp; | &ensp;</div>
                <a href="https://github.com/StuPM">github</a>
              </div>

              <p>Actively seaking a developer role.</p>
            </div>
            <div className="headshot container">
              <img src={me} alt="" srcset="" />
            </div>
          </div>
        </div>
        <h3>Down here!</h3>
      </div>
    </header>
  );
};

export default Head;
