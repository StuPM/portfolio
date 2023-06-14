import React from "react";
import { selectWebsiteData } from "../features/portfolioSlice";
import { useSelector } from "react-redux";
import Website from "./Website";

import "../styles/Main.scss";

const Main = () => {
  const websiteDate = useSelector(selectWebsiteData);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="0 0, 50 0, 0 50, 0 0" fill="#2134c4" />
      </svg>
      <main>
        {websiteDate.map((website) => (
          <div className="website" key={website.title}>
            <Website website={website} />
          </div>
        ))}
      </main>
    </>
  );
};

export default Main;
