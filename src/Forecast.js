import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import WeatherEmoji from "./WeatherEmoji.js";
import "./WeatherForecast.css";

export default function Forecast() {
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
