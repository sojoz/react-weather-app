import React from "react";
import Sun from "./svg/a_1_sunny.svg";

export default function MainSection() {
  return (
    <section className="middle-part">
      <button id="currentLocation">Current Location</button>
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
            class="frame-weather"
            src={Sun}
            title="animated icon"
          ></iframe>
        </div>
        <div className="main-list">
          <p id="mainTemperature">12°C</p>
          <p id="weatherText">Sunny Day</p>
          <p id="windSpeed">Wind: 12 km/h</p>
          <p id="humidity">Precipitation: 6%</p>
        </div>
      </div>
    </section>
  );
}
