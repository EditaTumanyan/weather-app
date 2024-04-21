import React from "react";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../redux/selectors";

function WeatherDetails() {
  const data = useSelector(selectWeatherData);

  return (
    <div className="bottom">
      <div className="feels">
        {data.main ? (
          <p className="bold">{data.main.feels_like.toFixed()} °C</p>
        ) : null}
        <p>Feels Like</p>
      </div>
      <div className="humidity">
        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
        <p>Humidity</p>
      </div>
      <div className="wind">
        {data.wind ? (
          <p className="bold">{data.wind.speed.toFixed()} KPH</p>
        ) : null}
        <p>Wind Speed</p>
      </div>
    </div>
  );
}

export default WeatherDetails;
