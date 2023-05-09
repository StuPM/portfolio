import React from "react";

import "../styles/Website.scss";

const Website = ({ website }) => {
  return (
    <>
      <div className="image">
        <img
          src={require(`../assets/` + website.img + `.png`)}
          alt=""
          srcset=""
        />
      </div>
      <div className="details">
        <h2 className="title">{website.title} </h2>
        <div className="tech">{website.tech}</div>
        <div className="description">{website.description}</div>
        <div className="websiteLinks">
          <button>
            <a href={website.github} className="link">
              Github
            </a>
          </button>
          <button>
            <a href={website.live} className="link">
              Live
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Website;
