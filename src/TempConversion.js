import React, { useState } from "react";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="TemperatureUnit">
        <div className="Temperature">{Math.round(props.celsius)}</div>
        <div className="tempUnit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="TemperatureUnit">
        <div className="Temperature">{Math.round(fahrenheit)}</div>
        <div className="tempUnit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </div>
      </div>
    );
  }
}
