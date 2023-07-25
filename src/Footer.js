import React from "react";
import Githublogo from "./images/pngwing.com.png";

export default function Footer() {
  return (
    <div>
      <img src={Githublogo} id="githubLogo" alt="githublogo"></img>
      <a href="https://github.com/sojoz/react-weather-app" id="githubLink">
        {" "}
        Open-sourced on Github
      </a>
    </div>
  );
}
