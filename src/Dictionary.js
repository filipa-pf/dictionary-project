import React, { useState } from "react";
import "./Dictionary.css"

export default function Dicionary() {
    let [keyword, setKeyword] = useState("");


    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return <div className="Dictionary">
        <div className="row d-flex justify-content-center">
            <div className="col-8">
                <form onSubmit={search} >
                    <input type="search" onChange={handleKeywordChange} className="d-block mx-auto"/>
                </form>
            </div>
        </div>
    </div>
}