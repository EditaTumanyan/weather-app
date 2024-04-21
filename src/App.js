import React, { useEffect } from "react";
import axios from "axios";
import "./index.css";
import Forecast from "./components/Forecast.js";
import CurrentWeather from "./components/CurrentWeather.js";
import WeatherDetails from "./components/WeatherDetails.js";
import Search from "./components/Search.js";
import { useDispatch, useSelector } from "react-redux";
import { updateWeatherData } from "./redux/reducers/weatherDataReducer.js";
import { updateForecastData } from "./redux/reducers/forecastDataReducer.js";
import { selectLocation } from "./redux/selectors.js";

function App() {
  const location = useSelector(selectLocation);
  const dispatch = useDispatch();
  const apiKey = "798a3fd81eb0fa6a59f48c79964d98a3";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;
  const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast`;

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          q: location,
          units: "metric",
          appid: apiKey,
        },
      });
      dispatch(updateWeatherData(response.data));
      fetchForecastData();
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const fetchForecastData = async () => {
    try {
      const response = await axios.get(forecastApiUrl, {
        params: { q: location, units: "metric", appid: apiKey },
      });
      const filteredForecastData = filterForecast(response.data.list);
      dispatch(updateForecastData(filteredForecastData));
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };

  const filterForecast = (forecastList) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const filteredForecast = {};
    forecastList.forEach((forecast) => {
      const forecastDate = new Date(forecast.dt * 1000);
      forecastDate.setHours(0, 0, 0, 0);
      if (
        forecastDate > currentDate &&
        Object.keys(filteredForecast).length < 6
      ) {
        const date = forecastDate.getDate();
        if (!filteredForecast[date]) {
          filteredForecast[date] = forecast;
        }
      }
    });
    return Object.values(filteredForecast);
  };

  useEffect(() => {
    if (location) {
      fetchData();
    }
  }, [location]);

  return (
    <div className="App">
      <Search fetchData={fetchData} />
      <div className="container">
        <CurrentWeather />
        <Forecast />
        <WeatherDetails />
      </div>
    </div>
  );
}

export default App;
