import React from "react";

const FunctionOnClick = () => {
  const clickHandler = () => {
    console.log("someone clicked me");
  };

  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
};

export default FunctionOnClick;
