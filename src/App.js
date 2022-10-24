import React from "react";
import "./styles.css";
import Title from "./Title";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";

function App() {
  return (
    <div>
      <div className="App">
        <Title />
        <Search />
        <CurrentWeather />
      </div>
      <p>
        <a href="https://github.com/ashcnaylor/react-weather-app">
          This code is open source{" "}
        </a>
        by Ash Naylor
      </p>
    </div>
  );
}

export default App;
