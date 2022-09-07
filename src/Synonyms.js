import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length !== 0) {
    return (
      <div className="Synonyms">
        <h5>Synonyms:</h5>
        {props.synonyms.map(function (synonym, index) {
          return (
            <div className="synonym-list" key={index}>
              {synonym}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
