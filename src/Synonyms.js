import React from "react";

const Synonyms = (props) => {
  if (props.synonyms) {
    return (
      <p className="p-0">
        <span className="PreSynonym text-secondary fst-italic">Syn:</span>

        {props.synonyms.map(function (synonym, index) {
          if (index < 3) {
            return (
              <span key={index} className="Synonym">
                {" "}
                {synonym}
              </span>
            );
          } else {
            return null;
          }
        })}
      </p>
    );
  } else {
    return null;
  }
};

export default Synonyms;
