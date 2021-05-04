import React from "react";
import Synonyms from "./Synonyms";

const Meaning = (props) => {
  return (
    <div className="Meaning pb-4">
      <h4 className="text-capitalize">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 2) {
          return (
            <div key={index}>
              <p className="Definition pt-2 mb-2 fw-bold">
                {definition.definition}
              </p>
              <p className="Example mb-2">{definition.example}</p>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Meaning;
