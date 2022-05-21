import React from "react";

export default function TextArea(props) {
  return (
    <>
      <p className="mb-1">{props.label}</p>
      <textarea className="input-text" {...props} />
    </>
  );
}
