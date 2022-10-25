import React, { useState } from "react";
import "./current-weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
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
    let apiKey = "e6c192fc2d52935f2ed5cbbf44309268";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="title">What's the Weather?</div>
        <div className="search">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <input
                type="text"
                placeholder="Enter city name"
                className="search-input col-7"
                onChange={handleCityChange}
              />
              <input
                type="submit"
                value="Search"
                className="search-button col-5"
              />
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
