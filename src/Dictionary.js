import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Dictionary = () => {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001982eac3e0f0d44ceb0c9fbf3c446cbce";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="row">
        <div className="col-md-5"></div>
        <div className="col-md-7">
          <div className="row">
            <div className="d-flex justify-content-center align-items-center w-auto">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <form onSubmit={search} className="w-auto p-0">
              <input
                type="text"
                autoFocus={true}
                placeholder="enter a word..."
                onChange={handleKeyword}
              />
            </form>
          </div>
        </div>
      </div>

      <div className="row Results pt-5">
        <div className="col-md-5 d-none d-md-block">img</div>

        <div className="col-md-7">
          <Results results={results} />
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
