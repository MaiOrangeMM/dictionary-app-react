import React from "react";

const Phonetic = (props) => {
  return (
    <div className="">
      <h4 class="pt-1 pb-5">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
          className="Phonetic text-decoration-none text-dark"
        >
          {props.phonetic.text}
        </a>
      </h4>
    </div>
  );
};

export default Phonetic;
