import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    value: 0,
    websiteData: [
      {
        title: "Film Tracking App",
        description: [
          "A fullstack personal film tracker app, allowing users to interactive with and read reviews and ratings entered by myself.",
          "Using 7 years worth of film tracking data stored in a MongoDB NoSQL database, that is continuously updated via a custom API backend. With film data pulled from an online API.",
        ],
        tech: ["FullStack", "React", "Redux", "MongoDB", "API"],
        img: "FILMGIF.gif",
        github: "https://github.com/StuPM/personal-film-tracker",
        live: "https://trackmyfilms.co.uk/",
        fullSize: true,
      },
      {
        title: "Hospitality Recruitment Website",
        description: [
          "Fullstack React app created as part of fullstack developer bootcamp.",
          "Personal highlights include the signup and navigation components, as well as connecting the front and backend and developing the SQL queries to retrieve the correct data.",
        ],
        tech: ["React", "Redux", "FullStack", "API", "MySQL"],
        img: "HOSPITALITYGIF.gif",
        github: "https://github.com/StuPM/hospitalityhunt",
        live: "https://hospitalityhunt-production.up.railway.app/",
        fullSize: true,
      },
      {
        title: "My Energy Usage",
        description: [
          "An experiment in Javascript graph technology.",
          "Utilising ChartJS to visualise my energy usage data from the Octopus Energy API and using Tailwind CSS for modern reusable component CSS.",
        ],
        tech: ["TailwindCSS", "Redux", "React", "API", "JavaScript"],
        img: "ENERGY.gif",
        github: "https://github.com/StuPM/myenergyusage",
        live: "https://my-energy-usage.netlify.app/",
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
          "A weather forecast website that returns the weather at 12pm for the next 5 days.",
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
        img: "A24GIF.gif",
        github: "https://github.com/StuPM/A24-Homage",
        live: "https://jump-a24-homage.netlify.app/",
        fullSize: true,
      },
      // {
      //   title: "Octopus Energy",
      //   description: ["TBC"],
      //   tech: ["Redux", "CSS", "graphs"],
      //   img: "website.png",
      //   github: "TBC",
      //   live: "TBC",
      //   fullSize: true,
      // },
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
