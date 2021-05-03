import React from "react";

const Meaning = (props) => {
  return (
    <div className="Meaning pb-4">
      <h4 className="text-capitalize">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p className="text-capitalize fst-italic">{definition.example}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Meaning;
