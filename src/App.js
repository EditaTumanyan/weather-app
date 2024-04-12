import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
   const [data, setData] = useState({});
  const [location, setLocation] = useState("Yerevan");
  const apiKey = "798a3fd81eb0fa6a59f48c79964d98a3";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;



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

  useEffect(() => {
    fetchData(location);
  }, []); 

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      fetchData(location);
      setLocation("");
    }
  };




  return (
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
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
                Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
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
      </div>
    </div>
  );
}

export default App;
