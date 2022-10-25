import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="current row">
        <div className="col">
          <h2 className="city">{props.data.city}</h2>
          <p className="date-and-time">
            <FormattedDate date={props.data.date} />
          </p>
          <p className="temp">{Math.round(props.data.temperature)}</p>
        </div>
        <div className="col">
          <WeatherIcon code={props.data.icon} />
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
