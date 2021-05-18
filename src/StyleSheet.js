import React from "react";
import "./myStyle.css";

export function StyleSheet(props) {
  let useStyle = props.useStyle ? "primary" : "";
  return <h1 className={`${useStyle} font-xl`}>Hello to Style</h1>;
}
