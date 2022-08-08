import React from "react";
import Synonyms from "./Synonyms";


export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="fs-5 fw-bold">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="mb-0">
            <strong className="mb-0">- </strong> {definition.definition}
            <br/>
            <em className="small px-3 text-secondary">{definition.example}</em>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
