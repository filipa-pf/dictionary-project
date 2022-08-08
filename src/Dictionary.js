import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dicionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    // documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
        <div className="Dictionary my-4">
          <div className="row d-flex justify-content-center py-4">
            <div className="col-8">
              <section>
                <form onSubmit={handleSubmit}>
                  <input
                    type="search"
                    placeholder="Insert word"
                    onChange={handleKeywordChange}
                    className="d-block mx-auto form-control"
                  />
                </form>
              </section>
              <Results results={results} />
            </div>
          </div>
        </div>
      );
  } else {
    load();
    return "Loading";
  }
  
}
