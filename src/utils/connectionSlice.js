import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: null,
  reducers: {
    setConnectionsUser: (state, action) => action.payload,
    removeConnectionUser: () => null,
  },
});
export const { setConnectionsUser, removeConnectionUser } =
  connectionSlice.actions;
export default connectionSlice.reducer;
