import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,

  reducers: {
    addFeed: (state, action) => action.payload,
    removefeed: () => null,
  },
});

export const { addFeed, removefeed } = feedSlice.actions;
export default feedSlice.reducer;
