import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  let WeatherData = {
    city: "Dallas",
    timestamp: "September 24, 2022 Saturday 12:25",
    temperature: "40",
    unit: "C°",
    description: "Partly Cloudy",
    humidity: "10",
    windspeed: "10",
  };

  return (
    <div className="row">
      <div className="col-5">
        <h2 className="current-city"> {WeatherData.city} </h2>
      </div>
      <div className="col-7 todayinfo">
        <h4 className="currentday"> {WeatherData.timestamp}</h4>
      </div>
      <div className="col-5">
        <h3 className="current-temp">
          <span>{WeatherData.temperature} </span>
          <span className="tempUnit">{WeatherData.unit} </span>
        </h3>
      </div>
      <div className="col-7  todayinfo">
        <span> {WeatherData.description}</span>
        <br />
        <span> humidity: {WeatherData.humidity}%</span>
        <br />
        <span> Windspeed: {WeatherData.windspeed} mph </span>
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
}
