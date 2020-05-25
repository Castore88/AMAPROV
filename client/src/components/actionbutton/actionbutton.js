import React from "react";
import "./actionbutton.css";

export const ActionButton = (props) => (
  <div
    className={`container ${props.className || ""}`}
    onClick={props.deposita}
  >
    {props.children || (
      <>
        <img
          className={`icon-container ${props.iconClass || ""}`}
          src={props.icon}
          alt=""
          onClick={props.azione}
        />
        <span className="label-container">{props.label}</span>
      </>
    )}
  </div>
);
