import React from "react";
import "./Phonetics.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return (
    <div className="container-fluid Phonetics">
      <ReactAudioPlayer
        src={props.phonetic.audio}
        controls
        className="audio-icon"
      />
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
