import React, { useState } from "react";
import Sun from "./svg/a_1_sunny.svg";
import axios from "axios";

export default function Form() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      weatherText: response.data.weather[0].description,
      windSpeed: response.data.wind.speed,
      precipitation: response.data.main.humidity,
    });
  }
  if (weatherData.ready) {
    return (
      <div>
        <form className="locationForm">
          <input
            className="searchbar"
            type="text"
            autoComplete="off"
            placeholder="Location"
            id="searchbarInput"
            autoFocus="on"
          />
          <input className="searchbutton" type="submit" value="Search" />
          <button id="currentLocation">Current Location</button>
        </form>
        <section className="middle-part">
          <h2>Utrecht</h2>
          <p className="Date-and-time" id="dateTime1">
            Monday 3rd April
          </p>
          <p className="Date-and-time" id="dateTime2">
            14:34
          </p>
          <div className="middle-text">
            <div>
              <iframe
                className="frame-weather"
                src={Sun}
                title="animated icon"
              ></iframe>
            </div>
            <div className="main-list">
              <p id="mainTemperature">
                {Math.round(weatherData.temperature)}°C
              </p>
              <p id="weatherText">{weatherData.weatherText}</p>
              <p id="windSpeed">
                Wind: {Math.round(weatherData.windSpeed)} km/h
              </p>
              <p id="humidity">Humidity: {weatherData.precipitation}%</p>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    const apiKey = "05af9d47239cd7aaf08f34ff3be4d1d6";
    let city = "Tokyo";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
