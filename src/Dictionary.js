import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dicionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
function handlePexelsResponse(response){
    console.log(response);
    setPhotos(response.data.photos);
}

  function search() {
    // documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey = "563492ad6f91700001000001d798a175a54d4144aad18d99e9f8559e";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = {"Authorization" : `Bearer ${pexelsApiKey}`}
    axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
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
              <Photos photos={photos}/>
            </div>
          </div>
        </div>
      );
  } else {
    load();
    return "Loading";
  }
  
}
