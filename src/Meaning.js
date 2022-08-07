import React from "react";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <h3 className="fs-5 fw-bold">{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <p>
                            {definition.definition}
                        </p>
                        <p className="small ps-3">
                            {definition.example}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}