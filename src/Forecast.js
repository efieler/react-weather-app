import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import WeatherEmoji from "./WeatherEmoji.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {}
  let apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="forecast">
      <div className="row">
        <div className="fivedays col-2">
          Days of week
          <ul className="card list-group list-group-flush">
            <li className="list-group-item fivedayemoji">
              <WeatherIcon />
            </li>
            <li className="list-group-item hightemp">25°</li>
            <li className="list-group-item lowtemp">10°</li>
            <li className="list-group-item fivedayemoji">
              <WeatherEmoji />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
