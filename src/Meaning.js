import React from "react";
import Example from "./Example";
import Synonym from "./Synonym";
import Antonym from "./Antonym";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      <p>{props.meaning.definition}</p>
      <p>
        <Example example={props.meaning.example} /> {props.meaning.example}
      </p>
      <p>
        <Synonym synonyms={props.meaning.synonyms} />
      </p>
      <p>
        <Antonym antonyms={props.meaning.antonyms} />
      </p>
    </div>
  );
}
