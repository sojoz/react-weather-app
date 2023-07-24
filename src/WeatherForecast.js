import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <h4>Wed</h4>
          <WeatherIcon className="custom-weather-icon" code="01d" ml-0 />
          <br />
          <span className="weather-forecast-max"> 13°C </span>
          <br />
          <span className="weather-forecast-min"> 10°C </span>
        </div>
        <div className="col">
          <h4>Wed</h4>
          <WeatherIcon className="custom-weather-icon" code="01d" ml-0 />
          <br />
          <span className="weather-forecast-max"> 13°C </span>
          <br />
          <span className="weather-forecast-min"> 10°C </span>
        </div>
        <div className="col">
          <h4>Wed</h4>
          <WeatherIcon className="custom-weather-icon" code="01d" ml-0 />
          <br />
          <span className="weather-forecast-max"> 13°C </span>
          <br />
          <span className="weather-forecast-min"> 10°C </span>
        </div>
        <div className="col">
          <h4>Wed</h4>
          <WeatherIcon className="custom-weather-icon" code="01d" ml-0 />
          <br />
          <span className="weather-forecast-max"> 13°C </span>
          <br />
          <span className="weather-forecast-min"> 10°C </span>
        </div>
        <div className="col">
          <h4>Wed</h4>
          <WeatherIcon className="custom-weather-icon" code="01d" ml-0 />
          <br />
          <span className="weather-forecast-max"> 13°C </span>
          <br />
          <span className="weather-forecast-min"> 10°C </span>
        </div>
      </div>
    </div>
  );
}
