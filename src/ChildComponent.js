import React from "react";

function ChildComponent(props) {
  return (
    <button onClick={() => props.greetHandler("child")}>greetHandler</button>
  );
}

export default ChildComponent;
