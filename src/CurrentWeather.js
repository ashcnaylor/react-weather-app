import React from "react";
import "./current-weather.css";
import axios from "axios";

export default function CurrentWeather() {
  let apiKey = "9ba0817f7000c09909bed30e28a2734c";
  let city = "New York";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=&${apiKey}`;
  return (
    <div>
      <div className="title">What's the Weather?</div>
      <div className="search">
        <form>
          <div className="row">
            <input
              type="text"
              placeholder="Enter city name"
              className="search-input col-7"
            />
            <input
              type="submit"
              value="Search"
              className="search-button col-5"
            />
          </div>
        </form>
      </div>
      <div className="current row">
        <div className="col">
          <h2 className="city">New York</h2>
          <p className="date-and-time">
            Friday, Sep 23 <br /> 2022, 09:58 AM
          </p>
          <p className="temp">55°F</p>
        </div>
        <div className="col">
          <p className="icon">🌥</p>
          <ul className="conditions">
            <li>Humidity: 55%</li>
            <li>Wind: 25mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
