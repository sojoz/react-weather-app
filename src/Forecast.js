import React from "react";
import Fairday from "./svg/a_1_sunny.svg";
import Cloudyday from "./svg/b_2_cloudy.svg";
import Cloudy from "./svg/b_1_partly_cloudy.svg";
import PartlyCloudy from "./svg/a_2_little_sunny.svg";

export default function Forecast() {
  return (
    <div className="container" id="forecastContainer">
      <div className="row">
        <div className="col col-3">
          <h4>Wed</h4>
          <iframe
            src={Fairday}
            className="weather-icon"
            alt="weatherIcon"
            title="animated icon"
          ></iframe>
          <br />
          <span className="weather-forecast-max"> 13°C </span>
          <br />
          <span className="weather-forecast-min"> 10°C </span>
          <br />
        </div>
        <div className="col-3" id="colThurs">
          <h4>Thu</h4>
          <iframe
            src={Cloudyday}
            className="weather-icon"
            alt="weatherIcon"
            title="animated icon"
          ></iframe>
          <br />
          <span className="weather-forecast-max"> 10°C </span>
          <br />
          <span className="weather-forecast-min"> 8°C </span>
        </div>

        <div className="col-3" id="colFri">
          <h4>Fri</h4>
          <iframe
            src={Cloudy}
            className="weather-icon"
            alt="weatherIcon"
            title="animated icon"
          ></iframe>
          <br />
          <span className="weather-forecast-max"> 10°C </span>
          <br />
          <span className="weather-forecast-min"> 9°C </span>
          <br />
        </div>

        <div className="col-3" id="colSat">
          <h4>Sat</h4>
          <iframe
            src={PartlyCloudy}
            className="weather-icon"
            alt="weatherIcon"
            title="animated icon"
          ></iframe>
          <br />
          <span className="weather-forecast-max"> 11°C </span>
          <br />
          <span className="weather-forecast-min"> 10°C </span>
          <br />
        </div>
      </div>
    </div>
  );
}
