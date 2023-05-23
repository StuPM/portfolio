import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    value: 0,
    websiteData: [
      {
        title: "Full stack personal film tracking website",
        description:
          "I built a website to track the films that I have seen throughout the year",
        tech: "REACT | REDUX | JS | (DATABASE?)",
        img: "website",
        github: "https://github.com/StuPM/personal-film-tracker",
        live: "TBC",
        fullSize: true,
      },
      {
        title: "Full stack hospitally recruitment website",
        description:
          "As apart of my full stack developer bootcamp with The Jump, for our final project we built a recruitment website aimed at the hospitialty industry.",
        tech: "REACT | REDUX | API | (DATABASE?)",
        img: "website",
        github: "https://github.com/russell-gh/hospitality-hunt",
        live: "https://hospitality-hunt.vercel.app/",
        fullSize: true,
      },
      {
        title: "A24 Homarge website",
        description:
          "Replica of the A24 entertainment company website, built using CSS and HTML. To showcase my ability to follow a design and build to a professional standard.",
        tech: "HTML | CSS",
        img: "website",
        github: "https://github.com/StuPM/A24-Homage",
        live: "TBC",
        fullSize: true,
      },
      {
        title: "Simpsons Quotes!",
        description:
          "My first foray into React web development.Using functional react components, prop drilling and state lifting. Connecting to an API with Axios and conditional styling based on user input. ",
        tech: "REACT | API | JS",
        img: "SIMPSONS-WEBSITE",
        github: "https://github.com/StuPM/react-simpsons-functional",
        live: "https://simpsons-quotes-spm.netlify.app/",
        fullSize: true,
      },
      {
        title: "Lunchtime Weather Forecast",
        description:
          "A weather forecast website that returns the weather for the next 5 lunctimes, by using either geolocation or the user inputted location. Using vanilla JavaScript to create code conditionally and SCSS for styling.",
        tech: "Vanilla JS | SCSS | HTML",
        img: "WEATHER-WEBSITE",
        github: "https://github.com/StuPM/5DayWeatherForcast",
        live: "https://5dayweatherforcast.netlify.app/",
        fullSize: true,
      },

      {
        title: "Octopus energy",
        description: "TBC",
        tech: "Redux CSS graphs",
        img: "website",
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
