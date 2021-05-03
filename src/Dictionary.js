import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Dictionary.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Dictionary = () => {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
            <div className="col-md-1 d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faSearch} className="fs-4" />
            </div>

            <div className="col-md-11 p-0">
              <form onSubmit={search}>
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
      </div>

      <div className="row">
        <div className="col-md-5">img</div>

        <div className="col-md-7">
          <Results results={results} />
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
