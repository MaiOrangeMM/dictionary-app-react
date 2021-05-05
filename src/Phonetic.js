import React from "react";

const Phonetic = (props) => {
  function playSound() {
    const audio = document.getElementById("audio");
    audio.play();
  }

  if (props.phonetic.audio) {
    return (
      <div className="pt-1 pb-5">
        <audio id="audio">
          <source src={props.phonetic.audio} type="audio/mp3" />
        </audio>
        <button
          onClick={playSound}
          className="Phonetic h4 text-decoration-none text-dark"
        >
          {props.phonetic.text}
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default Phonetic;
