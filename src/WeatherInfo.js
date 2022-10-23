import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherEmoji from "./WeatherEmoji";
import TempConversion from "./TempConversion.js";

export default function WeatherInfo(props) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-5">
          <h2 className="current-city"> {props.data.city} </h2>
        </div>
        <div className="col-7 todayinfo">
          <h4 className="currentday">
            {" "}
            <FormattedDate date={props.data.date} />
          </h4>
        </div>
        <div className="col-5">
          <span className="current-temp">
            <TempConversion celsius={props.data.temperature} />
          </span>
        </div>
        <div className="col-7  todayinfo">
          <span> {props.data.description}</span>
          <br />
          <span> humidity: {props.data.humidity}%</span>
          <br />
          <span> Windspeed: {Math.round(props.data.windspeed)} mph </span>
          <br />
        </div>
        <div className="today-emoji col-2">
          <WeatherIcon code={props.data.icon} />
        </div>
        <div className="today-emoji col-3">
          <WeatherEmoji code={props.data.icon} />
        </div>
      </div>
    </div>
  );
}
