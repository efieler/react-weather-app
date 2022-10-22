import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="searchbar" id="city-search">
      <input
        className="searchCityInput"
        type="search"
        placeholder="Search new City"
        autoComplete="off"
        autoFocus="on"
        id="search-city-input"
      />
      <button type="submit" className="btn btn-light show-current-button">
        🔎{" "}
      </button>
    </form>
  );
}
