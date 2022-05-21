import React from "react";

export default function InputSelect(props) {
  return (
    <>
      <p className="mb-1">{props.label}</p>
      <select
        className="input-select"
        style={
          {
            // padding: "0.8em",
            // borderRadius: "0.3em",
            // width: "100%",
            // marginBottom: "1em",
            // border: "1px solid #ccc",
            // fontSize: "0.9em",
          }
        }
        {...props}
      >
        <option value="0">Open</option>
        <option value="1">Completed</option>
      </select>
    </>
  );
}
