import { Backdrop, ClickAwayListener } from "@mui/material";
import React from "react";

export default function Modal(props) {
  return (
    <>
      <Backdrop open={true} style={{ backgroundColor: "#88888888" }}>
        <ClickAwayListener onClickAway={props.onClickAway}>
          <div className="p-5 modal-content">{props.children}</div>
        </ClickAwayListener>
      </Backdrop>
    </>
  );
}
