import React from "react";
import { selectWebsiteData } from "../features/portfolioSlice";
import { useSelector } from "react-redux";
import Website from "./Website";

import "../styles/Main.scss";

const Main = () => {
  const websiteDate = useSelector(selectWebsiteData);

  console.log(websiteDate);

  return (
    <main>
      {websiteDate.map((website) => (
        <div className={website.fullSize ? "website fullSize" : "website"}>
          <Website website={website} />
        </div>
      ))}
    </main>
  );
};

export default Main;
