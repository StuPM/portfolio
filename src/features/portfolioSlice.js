import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
  },
});

export const { increment } = portfolioSlice.actions;

export default portfolioSlice.reducer;
