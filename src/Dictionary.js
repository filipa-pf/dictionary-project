import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"

export default function Dicionary() {
    let [keyword, setKeyword] = useState("");


  function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
       
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse)
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