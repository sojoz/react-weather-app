import React from "react";
import axios from "axios";


export default function Form() {
  const apiKey = "2a2eaa51d996796495bf456e5b58adf4";
  =let apiUrl -
  return (
    <form className="locationForm">
      <input
        className="searchbar"
        type="text"
        autocomplete="off"
        placeholder="Location"
        id="searchbarInput"
        autoFocus="on"
      />
      <input className="searchbutton" type="submit" value="Search" />
    </form>
  );
}
