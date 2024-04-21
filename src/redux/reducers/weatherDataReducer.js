import { createSlice } from "@reduxjs/toolkit";
import { WEATHER_DATA_SLICE_NAME } from "../constants";
import { WEATHER_DATA_INITIAL_STATE } from "../initialStates";
const weatherDataSlice = createSlice({
  name: WEATHER_DATA_SLICE_NAME,
  initialState: WEATHER_DATA_INITIAL_STATE,
  reducers: {
    updateWeatherData(state, action) {
      state.data = action.payload;
    },
  },
});

export default weatherDataSlice.reducer;
export const { updateWeatherData } = weatherDataSlice.actions;
