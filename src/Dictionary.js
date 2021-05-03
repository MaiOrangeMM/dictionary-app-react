import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

const Dictionary = () => {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
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
    <div className="search-bar">
      <form onSubmit={search}>
        <input
          type="text"
          autoFocus={true}
          placeholder="search a word..."
          onChange={handleKeyword}
        />
      </form>
    </div>
  );
};

export default Dictionary;
