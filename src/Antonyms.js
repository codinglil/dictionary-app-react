import React from "react";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div className="Antonyms">
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
