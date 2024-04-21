import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: "Yerevan",
  reducers: {
    setLocation: (state, action) => action.payload,
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
