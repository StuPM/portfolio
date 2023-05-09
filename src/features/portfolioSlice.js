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
        live: "https://hospitalityhunt.uk/",
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
        title: "React weather forecast",
        description: "TBC",
        tech: "TBC",
        img: "website",
        github: "https://github.com/StuPM/react-simpsons-functional-redux",
        live: "TBC",
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
