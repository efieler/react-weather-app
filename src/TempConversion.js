import React from "react";

export default function TempConversion(props) {
  return (
    <div className="TemperatureUnit">
      <div className="Temperature">{Math.round(props.celsius)}°F</div>
    </div>
  );
}
