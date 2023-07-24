import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast"
import "./App.css";

export default function Form(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      weatherText: response.data.weather[0].description,
      windSpeed: response.data.wind.speed,
      precipitation: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "05af9d47239cd7aaf08f34ff3be4d1d6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form className="locationForm" onSubmit={handleSubmit}>
          <input
            className="searchbar"
            type="text"
            autoComplete="off"
            placeholder="Location"
            id="searchbarInput"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input className="searchbutton" type="submit" value="Search" />
          <button id="currentLocation">Current Location</button>
        </form>
        <section className="middle-part">
          <h2>{weatherData.city}</h2>
          <p className="Date-and-time" id="dateTime1">
            <FormattedDate date={weatherData.date} />
          </p>
          <WeatherInfo data={weatherData} />
        </section>
        <WeatherForecast coordinates={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
