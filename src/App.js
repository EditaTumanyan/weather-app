import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import Forecast from "./components/Forecast.js";
import CurrentWeather from "./components/CurrentWeather.js";
import WeatherDetails from "./components/WeatherDetails.js";
import Search from "./components/Search.js";
function App() {
  const [data, setData] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const [location, setLocation] = useState("Yerevan");
  const apiKey = "798a3fd81eb0fa6a59f48c79964d98a3";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;
  const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast`;

  const fetchData = async (location) => {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          q: location,
          units: "metric",
          appid: apiKey,
        },
      });
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchForecastData = async (location) => {
    try {
      const response = await axios.get(forecastApiUrl, {
        params: {
          q: location,
          units: "metric",
          appid: apiKey,
        },
      });
      const filteredForecastData = filterForecast(response.data.list);
      setForecastData(filteredForecastData);
      console.log(filteredForecastData);
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
    fetchData(location);
    fetchForecastData(location);
  }, []);

  return (
    <div className="App">
      <Search
        location={location}
        setLocation={setLocation}
        fetchData={fetchData}
      />
      <div className="container">
        <CurrentWeather data={data} />
        <Forecast forecastData={forecastData} />
        <WeatherDetails data={data} />
      </div>
    </div>
  );
}

export default App;
