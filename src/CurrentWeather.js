import React from "react";
import "./current-weather.css";

export default function CurrentWeather() {
  return (
    <div className="current">
      <h2 className="city">New York</h2>
      <p className="date-and-time">
        Friday, Sep 23 <br /> 2022, 09:58 AM
      </p>
      <p className="temp">55°F</p>
      <p className="icon">🌥</p>
      <ul className="conditions">
        <li>Humidity: 55%</li>
        <li>Wind: 25mph</li>
      </ul>
    </div>
  );
}
