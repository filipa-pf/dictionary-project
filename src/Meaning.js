import React from "react";
import Synonyms from "./Synonyms";


export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 className="fs-5 fw-bold">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="mb-0">
            <p className="mb-0 my-auto">
            <strong className="mb-0">- </strong> {definition.definition}
            <br/>
            <em className="small ps-3 mt-0">{definition.example}</em>
            <Synonyms synonyms={definition.synonyms} />
          </p>
          </div>
        );
      })}
    </div>
  );
}
