import React from "react";

export default function Form() {
  return (
    <form className="locationForm">
      <input
        className="searchbar"
        type="text"
        autocomplete="off"
        placeholder="Location"
        id="searchbarInput"
      />
      <input className="searchbutton" type="submit" value="Search" />
    </form>
  );
}
