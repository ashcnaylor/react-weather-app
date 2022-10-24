import React from "react";
import "./search.css";

export default function Search() {
  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="Enter city name"
          className="search-input"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </div>
  );
}
