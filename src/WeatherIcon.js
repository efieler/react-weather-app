import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01n": `🌙`,
    "01d": `☀️`,
    "02n": `☁️`,
    "02d": `🌤`,
    "03d": `🌥`,
    "03n": `☁`,
    "04d": `☁️`,
    "04n": `☁️`,
    "09d": `🌦`,
    "09n": `🌧`,
    "10d": `🌧`,
    "10n": `🌧`,
    "11d": `⛈`,
    "11n": `⛈`,
    "13d": `❄️`,
    "13n": `❄️`,
    "50d": `💦`,
    "50n": `💦`,
  };

  return <div>{codeMapping[props.code]}</div>;
}
