import React from "react";
import { FaAssistiveListeningSystems } from "react-icons/fa";

export default function Phonetic(props){
    return (
        <div className="Phonetic py-2">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                <FaAssistiveListeningSystems/>
            </a>
          <span> {props.phonetic.text}</span>  
        </div>
    )}