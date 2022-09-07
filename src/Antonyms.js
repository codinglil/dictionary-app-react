import React from "react";

export default function Antonyms(props) {
  if (props.antonyms.length !== 0) {
    return (
      <div className="Antonyms">
        <h5>Antonyms:</h5>
        {props.antonyms.map(function (antonym, index) {
          return (
            <div className="antonym-list" key={index}>
              {antonym}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
