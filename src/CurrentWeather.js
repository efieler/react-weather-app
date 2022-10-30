import React, { useState } from "react";
import "./CurrentWeather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import Forecast from "./Forecast";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      windspeed: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
        <div className="searchbar">
          <form onSubmit={handleSubmit}>
            <input
              className="searchCityInput"
              type="search"
              placeholder="Search new City"
              autoComplete="off"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <input
              type="submit"
              className="btn btn-light show-current-button"
              value="🔎"
            />
          </form>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
