import React from "react";
import { FaAssistiveListeningSystems } from "react-icons/fa";

export default function Phonetic(props){
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank">
                <FaAssistiveListeningSystems />
            </a>
            <br />
            {props.phonetic.text}
        </div>
    )}