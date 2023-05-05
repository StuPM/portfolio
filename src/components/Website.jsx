import React from "react";

import "../styles/Website.scss";

const Website = ({ website }) => {
  return (
    <>
      <div className="image">
        <p>{website.img}</p>
      </div>
      <div className="details">
        <div className="title">{website.title} </div>
        <div className="tech">{website.tech}</div>
        <div className="websiteLinks">
          <p className="link">{website.github}</p>
          <p className="link">{website.live}</p>
        </div>
      </div>
    </>
  );
};

export default Website;
