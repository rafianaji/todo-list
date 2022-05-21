import React from "react";
import "./Components.scss";

export default function Button(props) {
  return (
    <>
      <span
        className="p-2 pl-4 pr-4 mt-2 button ml-2"
        {...props}
        style={{
          backgroundColor: props.danger && "#F23030",
          color: props.danger && "white",
        }}
      >
        {props.children}
      </span>
    </>
  );
}
