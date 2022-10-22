import React, { useState } from "react";
import "./CurrentWeather.css";
import axios from "axios";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      timestamp: "September 24, 2022 Saturday 12:25",
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      windspeed: response.data.wind.speed,
      unit: "C°",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="row">
        <div className="col-5">
          <h2 className="current-city"> {weatherData.city} </h2>
        </div>
        <div className="col-7 todayinfo">
          <h4 className="currentday"> {weatherData.timestamp}</h4>
        </div>
        <div className="col-5">
          <h3 className="current-temp">
            <span>{Math.round(weatherData.temperature)} </span>
            <span className="tempUnit">{weatherData.unit} </span>
          </h3>
        </div>
        <div className="col-7  todayinfo">
          <span> {weatherData.description}</span>
          <br />
          <span> humidity: {weatherData.humidity}%</span>
          <br />
          <span> Windspeed: {Math.round(weatherData.windspeed)} mph </span>
        </div>
        <br />
        <div className="today-emoji col-2" id="first-today-emoji">
          ❤️
        </div>
        <div className="today-emoji col-3" id="second-today-emoji">
          {" "}
          🤓
        </div>
      </div>
    );
  } else {
    const apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
