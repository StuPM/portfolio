import React from "react";

import "../styles/Website.scss";

const Website = ({ website }) => {
  return (
    <>
      <div className="image">
        <img src={require(`../assets/` + website.img + `.png`)} />
      </div>
      <div className="details">
        <div className="detailsText">
          <h2 className="title">{website.title} </h2>
          <div className="tech">{website.tech}</div>
          <div className="description">{website.description}</div>{" "}
        </div>

        <div className="detailsLinks">
          <a href={website.github} className="link">
            <span>Github</span>
          </a>
          <a href={website.live} className="link">
            <span>Live</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Website;
