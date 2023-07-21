import React from "react";
import Sun from "./svg/a_1_sunny.svg";

export default function WeatherInfo(props) {
  return (
    <div className="middle-text">
      <div>
        <iframe
          className="frame-weather"
          src={Sun}
          title="animated icon"
        ></iframe>
      </div>
      <div className="main-list">
        <p id="mainTemperature">{Math.round(props.data.temperature)}°C</p>
        <p id="weatherText">{props.data.weatherText}</p>
        <p id="windSpeed">Wind: {Math.round(props.data.windSpeed)} km/h</p>
        <p id="humidity">Humidity: {props.data.precipitation}%</p>
      </div>
    </div>
  );
}
