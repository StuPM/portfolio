import React from "react";
import { selectWebsiteData } from "../features/portfolioSlice";
import { useSelector } from "react-redux";
import Website from "./Website";

import "../styles/Main.scss";

const Main = () => {
  const websiteDate = useSelector(selectWebsiteData);

  return (
    <main id="MAINTEST">
      {websiteDate.map((website) => (
        <div
          className={website.fullSize ? "website fullSize" : "website"}
          key={website.title}
        >
          <Website website={website} />
        </div>
      ))}
    </main>
  );
};

export default Main;
