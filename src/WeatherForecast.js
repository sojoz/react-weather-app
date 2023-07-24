import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  const apiKey = "de2c40e370d58e257faf07ba4ea95840";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=part&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
      </div>
    </div>
  );
}
