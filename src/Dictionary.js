import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [theword, setTheword] = useState("");

  function handleTheword(event) {
    setTheword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for "${theword}" definition`);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          className="search-space"
          onChange={handleTheword}
        ></input>
        <input type="submit" className="btn btn-danger" value="🔍"></input>
      </form>
    </div>
  );
}
