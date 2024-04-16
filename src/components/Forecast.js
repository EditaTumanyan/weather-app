import React from "react";

function Forecast({ forecastData }) {
  return (
    <div className="forecast">
      {forecastData.map((forecast, index) => (
        <div key={index} className="forecast-item">
          <p>
            {new Date(forecast.dt * 1000).toLocaleDateString("en-US", {
              weekday: "long",
            })}
          </p>
          <p>{forecast.main.temp.toFixed()} °C</p>
          <p>{forecast.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
