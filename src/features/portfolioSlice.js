import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    value: 0,
    websiteData: [
      {
        title: "Title 1",
        tech: "Redux CSS",
        img: ".../image here",
        github: "www.git.com",
        live: "www.live.com",
        fullSize: true,
      },
      {
        title: "Title 2",
        tech: "Redux CSS",
        img: ".../image here",
        github: "www.git.com",
        live: "www.live.com",
        fullSize: true,
      },
      {
        title: "Title 3 small",
        tech: "Redux CSS",
        img: ".../image here",
        github: "www.git.com",
        live: "www.live.com",
        fullSize: false,
      },
      {
        title: "Title 4 small",
        tech: "Redux CSS",
        img: ".../image here",
        github: "www.git.com",
        live: "www.live.com",
        fullSize: false,
      },
      {
        title: "Title 5 small",
        tech: "Redux CSS",
        img: ".../image here",
        github: "www.git.com",
        live: "www.live.com",
        fullSize: false,
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
