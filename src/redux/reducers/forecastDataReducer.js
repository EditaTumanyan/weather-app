import { createSlice } from "@reduxjs/toolkit";
import { FOREACST_DATA_SLICE_NAME } from "../constants";
import { FOREACAST_DATA_INITIAL_STATE } from "../initialStates";
const foreacastReducer = createSlice({
  name: FOREACST_DATA_SLICE_NAME,
  initialState: FOREACAST_DATA_INITIAL_STATE,
  reducers: {
    updateForecastData(state, action) {
      state.data = action.payload;
    },
  },
});

export default foreacastReducer.reducer;
export const { updateForecastData } = foreacastReducer.actions;
