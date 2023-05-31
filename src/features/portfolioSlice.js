import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    value: 0,
    websiteData: [
      {
        title: "Film Tracking App",
        description: [
          "Fullstack React app letting me track and review the films that I have watched.",
          "Database backend created by me, connecting to a MongoDB where data pulled a movie API is stored.",
        ],
        tech: ["FullStack", "React", "Redux", "MongoDB", "API"],
        img: "website.png",
        github: "https://github.com/StuPM/personal-film-tracker",
        live: "TBC",
        fullSize: true,
      },
      {
        title: "Hospitality Recruitment Website",
        description: [
          "Fullstack React app created as part of my fullstack developer bootcamp.",
          "My highlights include the signup and navigation components, as well as connecting the front and backend and developing the SQL queries to show the correct data.",
        ],
        tech: ["React", "Redux", "FullStack", "API", "MySQL"],
        img: "HOSPITALITYGIF.gif",
        github: "https://github.com/russell-gh/hospitality-hunt",
        live: "https://hospitalityhunt.uk/",
        fullSize: true,
      },
      {
        title: "Simpsons Quotes Generator",
        description: [
          "My first foray into React development.",
          "Using functional react components, prop drilling and state lifting. Connecting to an API with Axios and conditional styling based on user actions and inputs.",
        ],
        tech: ["React", "API", "JavaScript"],
        img: "SIMPSONSGIF.gif",
        github: "https://github.com/StuPM/react-simpsons-functional",
        live: "https://simpsons-quotes-spm.netlify.app/",
        fullSize: true,
      },
      {
        title: "Lunchtime Weather Forecast",
        description: [
          "A weather forecast website that returns the weather at 12pm or the next 5 lunchtimes.",
          "Either by using geolocation or an inputted location to know where to get the weather for. Using JavaScript to create HTML conditionally and SCSS for styling.",
        ],
        tech: ["JavaScript", "SCSS", "API", "HTML"],
        img: "WEATHERGIF.gif",
        github: "https://github.com/StuPM/5DayWeatherForcast",
        live: "https://5dayweatherforcast.netlify.app/",
        fullSize: true,
      },
      {
        title: "A24 Homage Website",
        description: [
          "A homage to the A24 film studio website, built using only CSS and HTML to showcase my ability to follow a design and build a website to a professional standard.",
        ],
        tech: ["SCSS", "HTML", "CSS"],
        img: "A24.png",
        github: "https://github.com/StuPM/A24-Homage",
        live: "https://jump-a24-homage.netlify.app/",
        fullSize: true,
      },
      {
        title: "Octopus Energy",
        description: ["TBC"],
        tech: ["Redux", "CSS", "graphs"],
        img: "website.png",
        github: "TBC",
        live: "TBC",
        fullSize: true,
      },
    ],
  },

  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
  },
});

export const { increment } = portfolioSlice.actions;

export const selectWebsiteData = (state) => state.portfolio.websiteData;

export default portfolioSlice.reducer;
