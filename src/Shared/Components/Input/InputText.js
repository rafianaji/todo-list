import React from "react";

export default function InputText(props) {
  return (
    <>
      <p className="mb-1">{props.label}</p>
      <input type="text" className="input-text" {...props} />
    </>
  );
}
