import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <p className="footer">
      <a href="https://github.com/efieler/react-weather-app" id="github-link">
        {" "}
        Open Source Code{" "}
      </a>
      by
      <a href="https://www.lizzybel.com"> Elizabeth Fieler</a>
    </p>
  );
}
