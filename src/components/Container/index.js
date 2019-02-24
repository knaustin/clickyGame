import React from "react";
import "./Container.css";

function Wrapper(props) {
  return <main className="gameSpace">{props.children}</main>;
}

export default Wrapper;
