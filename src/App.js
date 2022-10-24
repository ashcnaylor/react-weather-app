import React from "react";
import "./styles.css";
import CurrentWeather from "./CurrentWeather";

function App() {
  return (
    <div>
      <div className="App">
        <CurrentWeather defaultCity="New York" />
      </div>
      <p className="Source">
        <a href="https://github.com/ashcnaylor/react-weather-app">
          This code is open source{" "}
        </a>
        by Ash Naylor
      </p>
    </div>
  );
}

export default App;
