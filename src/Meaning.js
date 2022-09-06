import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="part-of-speech">{props.meaning.partOfSpeech}</h3>
      <br />
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="word-definition">⁘ {definition.definition}</p>
            <p className="word-examples">{definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}
