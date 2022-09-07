import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [theword, setTheword] = useState("brave");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleTheword(event) {
    setTheword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${theword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="  ..."
            className="search-space"
            onChange={handleTheword}
          ></input>
          <input type="submit" className="btn btn-danger" value="🔍"></input>
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
