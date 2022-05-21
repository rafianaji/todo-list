import React from "react";
import "../Components.scss";

export default function InputDate(props) {
  return (
    <>
      <p className="mb-1">{props.label}</p>
      <input className="input-date" type="date" {...props} />
    </>
  );
}
