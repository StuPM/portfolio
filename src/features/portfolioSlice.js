import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    value: 0,
    websiteData: [
      {
        title: "Film Tracking App",
        description:
          "Fullstack React app, letting my track and review the films that I have seen. Come see my reviews and rating for every film I've seen this year!",
        tech: ["React", "Redux", "MongoDB", "API"],
        img: "website.png",
        github: "https://github.com/StuPM/personal-film-tracker",
        live: "TBC",
        fullSize: true,
      },
      {
        title: "Hospitality Recruitment Website",
        description:
          "A fullstack app created as a group project as apart of my fullstack developer bootcamp. My hightlights include the signup and navigation components and connecting to the frontend to backend database.",
        tech: ["REACT", "REDUX", "API", "MySQL"],
        img: "website.png",
        github: "https://github.com/russell-gh/hospitality-hunt",
        live: "https://hospitalityhunt.uk/",
        fullSize: true,
      },
      {
        title: "Simpsons Quotes Generator",
        description:
          "My first foray into React development. Using functional react components, prop drilling and state lifting. Connecting to an API with Axios and conditional styling based on user actions.",
        tech: ["React", "API", "JavaScript"],
        img: "simp.gif",
        github: "https://github.com/StuPM/react-simpsons-functional",
        live: "https://simpsons-quotes-spm.netlify.app/",
        fullSize: true,
      },
      {
        title: "Lunchtime Weather Forecast",
        description:
          "A weather forecast website that returns the weather for the next 5 lunctimes, by using either geolocation or the user inputted location. Using JavaScript to create HTML conditionally and SCSS for styling.",
        tech: ["JavaScript", "SCSS", "API", "HTML"],
        img: "WEATHER-WEBSITE.png",
        github: "https://github.com/StuPM/5DayWeatherForcast",
        live: "https://5dayweatherforcast.netlify.app/",
        fullSize: true,
      },
      {
        title: "A24 Homage Website",
        description:
          "A homage to the A24 film studio website, built using only CSS and HTML. To showcase my ability to follow a design and build a website to a professional standard.",
        tech: ["SCSS", "HTML", "CSS"],
        img: "A24.png",
        github: "https://github.com/StuPM/A24-Homage",
        live: "https://jump-a24-homage.netlify.app/",
        fullSize: true,
      },
      {
        title: "Octopus Energy",
        description: "TBC",
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
