import React, { useLayoutEffect } from "react";
import "../styles/Head.scss";
import Nav from "./Nav";
import headshot from "../assets/headshot.png";

import { gsap } from "gsap";

const Head = () => {
  useLayoutEffect(() => {
    let tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(".emoji", {
      duration: 0.5,
      y: -10,
    });
  }, []);

  return (
    <header>
      <div className="container headerMain">
        <Nav />
        <div className="textAndHead container">
          <div className="headerText">
            <div className="title">
              <h1>Hello! &nbsp;</h1>
              <div>👋</div>
            </div>

            <div>React | JavaScript | CSS 3 | HTML5 </div>
            <p>
              I'm Stuart McGee and I'm a frontend developer. Please scroll down
              to see my projects!
            </p>

            <p>Actively seaking a developer role.</p>
          </div>
          <div className="headshot container">
            <img src={headshot} alt="Headshot of Stuart McGee" />
          </div>
        </div>
        <div className="down">
          <div className="emoji">👇</div>
          <h2>&nbsp;Down here!&nbsp;</h2>
          <div className="emoji right">👇</div>
        </div>
      </div>
    </header>
  );
};

export default Head;
