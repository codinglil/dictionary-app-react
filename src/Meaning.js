import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  console.log(props.meaning.synonyms);
  return (
    <div className="Meaning">
      <h3 className="part-of-speech">{props.meaning.partOfSpeech}</h3>
      <br />
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="word-definition">⁘ {definition.definition}</p>
            <p className="word-examples">{definition.example}</p>
            <Synonyms synonyms={definition.synonyms} />
            <Antonyms antonyms={definition.antonyms} />
          </div>
        );
      })}
    </div>
  );
}
