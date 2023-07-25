import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <h4>{day()}</h4>
      <WeatherIcon
        className="custom-weather-icon"
        code={props.data.weather[0].icon}
        ml-0
      />
      <br />
      <span className="weather-forecast-max">{maxTemperature()}</span>
      <br />
      <span className="weather-forecast-min">{minTemperature()}</span>
    </div>
  );
}
