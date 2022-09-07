import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="container-fluid Phonetics">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="audio-icon"
      >
        🔊{" "}
      </a>{" "}
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}