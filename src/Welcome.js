import React from "react";
import { render } from "react-dom";

export const Welcome = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.name}</h1>
      {props.children}
    </div>
  );
};
