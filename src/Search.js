import React from "react";
import "./search.css";

export default function Search() {
  return (
    <div className="search">
      <form>
        <div className="row">
          <input
            type="text"
            placeholder="Enter city name"
            className="search-input col-7"
          />
          <input type="submit" value="Search" className="search-button col-5" />
        </div>
      </form>
    </div>
  );
}
