import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="current row">
        <div className="col">
          <h2 className="city">{props.data.city}</h2>
          <div className="date-and-time">
            <FormattedDate date={props.data.date} />
          </div>
          <div>
            <WeatherTemperature celcius={props.data.temperature} />
          </div>
        </div>
        <div className="col">
          <div className="current-icon">
            <WeatherIcon code={props.data.icon} size={58} />
          </div>
          <ul className="conditions">
            <li>
              <strong>{props.data.description}</strong>
            </li>
            <li>
              Humidity:
              <strong>{props.data.humidity}%</strong>
            </li>
            <li>
              Wind:
              <strong>{props.data.wind}mph</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
