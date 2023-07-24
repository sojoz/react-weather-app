import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  console.log(props);
  const codeMapping = {
    "01d": { icon: "CLEAR_DAY", color: "#ffce55" },
    "01n": { icon: "CLEAR_NIGHT", color: "#ffce55" },
    "02d": { icon: "PARTLY_CLOUDY_DAY", color: "#ffce55" },
    "02n": { icon: "PARTLY_CLOUDY_NIGHT", color: "#A3A06A" },
    "03d": { icon: "PARTLY_CLOUDY_DAY", color: "#ffce55" },
    "03n": { icon: "PARTLY_CLOUDY_DAY", color: "#ffce55" },
    "04d": { icon: "CLOUDY", color: "#052648" },
    "04n": { icon: "CLOUDY", color: "#052648" },
    "09d": { icon: "RAIN", color: "#052648" },
    "09n": { icon: "RAIN", color: "#052648" },
    "10d": { icon: "RAIN", color: "#052648" },
    "10n": { icon: "RAIN", color: "#052648" },
    "11d": { icon: "RAIN", color: "#052648" },
    "11n": { icon: "RAIN", color: "#052648" },
    "13d": { icon: "SNOW", color: "lightblue" },
    "13n": { icon: "SNOW", color: "lightblue" },
    "50d": { icon: "FOG", color: "#858585" },
    "50n": { icon: "FOG", color: "#858585" },
  };
  const weatherInfo = codeMapping[props.code];

  return (
    <ReactAnimatedWeather
      icon={weatherInfo ? weatherInfo.icon : "CLEAR_DAY"}
      color={weatherInfo ? weatherInfo.color : "#ffce55"}
      size={100}
      animate={true}
    />
  );
}
