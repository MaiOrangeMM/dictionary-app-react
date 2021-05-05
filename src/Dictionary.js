import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Dictionary = (props) => {
  let [keyword, setKeyword] = useState(props.defaulKeyword);
  let [results, setResults] = useState(null);
  let [photo, setPhoto] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    if (response.data[0]) {
      setResults(response.data[0]);
    } else {
      setResults();
    }
  }

  function handlepixabayResponse(response) {
    if (response.data.hits[0]) {
      setPhoto(response.data.hits[0].largeImageURL);
    } else {
      setPhoto(null);
    }
  }

  function search() {
    // API DICTIONARY
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // API IMG
    const pixabayApiKey = "21474670-4055107042a3ca5a487d077dd";
    let pixabayApiUrl = `https://pixabay.com/api/?key=${pixabayApiKey}&q=${keyword}&image_type=photo&orientation=vertical`;
    axios.get(pixabayApiUrl).then(handlepixabayResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  const imgStyle = {
    backgroundImage: `url('${photo}')`,
    backgroundPosition: "center",
    filter: "grayscale(1)",
  };

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="row">
          <div className="col-md-4 ms-md-5 py-3 d-none d-lg-block"></div>
          <div className="col-md-1 d-none d-md-block"></div>
          <div className="col-md-6 ms-md-5">
            <div className="row">
              <div className="d-flex justify-content-center align-items-center w-auto">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <form onSubmit={handleSubmit} className="w-auto p-0">
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
          <div
            className="Photo col-md-4 ms-md-5 py-3 d-none d-xl-block"
            style={imgStyle}
          ></div>
          <div className="col-md-1 d-none d-md-block"></div>
          <div className="col-md-6 ms-md-5">
            <Results results={results} />
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
};

export default Dictionary;
