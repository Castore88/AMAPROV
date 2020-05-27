import React from "react";
import "./header.css";

export const Header = (props) => (
  <header className={`site-header ${props.className}`}>
    {/* <h1 className="page-title">{props.title}</h1> */}
    <img className="site-logo" src={props.logo} alt="" />
  </header>
);
