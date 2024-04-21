import { createSlice } from "@reduxjs/toolkit";
import { LOCATION_SLICE_NAME } from "../constants";
import { LOCATION_INITIAL_STATE } from "../initialStates";
export const locationSlice = createSlice({
  name: LOCATION_SLICE_NAME,
  initialState: LOCATION_INITIAL_STATE,
  reducers: {
    setLocation: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
