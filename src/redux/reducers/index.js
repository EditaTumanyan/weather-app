import { combineReducers } from "@reduxjs/toolkit";
import weatherDataReducer from "./weatherDataReducer";
import forecastDataReducer from "./forecastDataReducer";
import locationReducer from "./locationReducer";
const rootReducer = combineReducers({
  weatherData: weatherDataReducer,
  forecastData: forecastDataReducer,
  location: locationReducer,
});

export default rootReducer;
