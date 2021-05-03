import React, { useState } from "react";
import "./Dictionary.css";

const Dictionary = () => {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Search: ${keyword}`);
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
