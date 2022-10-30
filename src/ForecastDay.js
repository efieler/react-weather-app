import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import WeatherEmoji from "./WeatherEmoji.js";
import "./WeatherForecast.css";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  return (
    <div>
      {day()}
      <ul className="card list-group list-group-flush">
        <li className="list-group-item fivedayemoji">
          <WeatherIcon code={props.data.weather[0].icon} />
        </li>
        <li className="list-group-item hightemp">{maxTemp()}</li>
        <li className="list-group-item lowtemp">{minTemp()}</li>
        <li className="list-group-item fivedayemoji">
          <WeatherEmoji code={props.data.weather[0].icon} />
        </li>
      </ul>
    </div>
  );
}
