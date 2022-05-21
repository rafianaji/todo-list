import React from "react";
import "./Components.scss";

export default function List(props) {
  return (
    <>
      <div className="list" {...props}>
        {props.children}
      </div>
    </>
  );
}
