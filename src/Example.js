import React from "react";

const Example = (props) => {
  if (props.example) {
    return <p className="Example mb-2">{props.example}</p>;
  } else {
    return null;
  }
};

export default Example;
