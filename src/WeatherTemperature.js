import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function convertFtoC(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCtoF(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div id="mainTemperature">
        {Math.round(props.celcius)}°C |
        <a href="/" id="mainTemperature" onClick={convertFtoC}>
          °F{" "}
        </a>{" "}
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div id="mainTemperature">
        {Math.round(fahrenheit)}
        <a href="/" id="mainTemperature" onClick={convertCtoF}>
          °C{" "}
        </a>
        | °F
      </div>
    );
  }
}
