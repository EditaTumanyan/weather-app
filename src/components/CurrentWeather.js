import React from "react";

function CurrentWeather({ data }) {
  return (
    <div className="top">
      <div className="location">
        <p className="city">{data.name}</p>
        {data.sys && (
          <p>
            Sunrise:{" "}
            {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
          </p>
        )}
        {data.sys && (
          <p>
            Sunset:{" "}
            {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
          </p>
        )}
      </div>
      <div className="temp">
        {data.main ? (
          <h1 className="temperature">{data.main.temp.toFixed()} °C</h1>
        ) : null}
      </div>
      <div className="description">
        {data.weather ? <p>{data.weather[0].main}</p> : null}
      </div>
    </div>
  );
}

export default CurrentWeather;
