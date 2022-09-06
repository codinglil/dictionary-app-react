import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="word">{props.results.word}</h2>
        {props.results.phonetics.map(function (value, index) {
          return (
            <div key={index}>
              <Phonetics phonetic={value} />
            </div>
          );
        })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  }
}
