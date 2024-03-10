import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1>{props.results.word}</h1>
        <p>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
