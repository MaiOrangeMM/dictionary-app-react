import React from "react";
import "./Dictionary.css";

const Meaning = (props) => {
  console.log(props.meaning);
  return (
    <div className="Meaning pb-4">
      <h4 className="text-capitalize">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definitions}</p>
            <p className="text-capitalize fst-italic">{definition.example}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Meaning;
