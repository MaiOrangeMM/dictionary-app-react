import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

const Results = (props) => {
  if (props.results) {
    return (
      <div>
        <h1 className="display-3 fw-bold m-0 p-0 pt-1">
          {props.results.word}.
        </h1>
        {props.results.phonetics.map(function (phonetic, index) {
          if (index < 1) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          } else {
            return null;
          }
        })}

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Results;
