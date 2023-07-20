import React, {useState} from "react";
import axios from "axios";

export default function Form() {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "05af9d47239cd7aaf08f34ff3be4d1d6";
  let city = "Paris";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
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
    </form>
  );
}
