import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [theword, setTheword] = useState("");

  function handleTheword(event) {
    setTheword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${theword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="  ..."
          className="search-space"
          onChange={handleTheword}
        ></input>
        <input type="submit" className="btn btn-danger" value="🔍"></input>
      </form>
    </div>
  );
}
