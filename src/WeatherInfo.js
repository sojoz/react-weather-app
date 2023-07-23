import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="middle-text">
      <div>
        <WeatherIcon code={props.data.icon} />
      </div>
      <div className="main-list">
        <WeatherTemperature celcius={props.data.temperature} />

        <p id="weatherText">{props.data.weatherText}</p>
        <p id="windSpeed">Wind: {Math.round(props.data.windSpeed)} km/h</p>
        <p id="humidity">Humidity: {props.data.precipitation}%</p>
      </div>
    </div>
  );
}
