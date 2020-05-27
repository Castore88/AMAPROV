import React, { Component } from "react";
import classes from "../login_components/Connetti.module.css";

class Registrati extends Component {
  render() {
    return (
      <div>
        <button className={classes.Registrati}>Registrati a Metamask</button>
      </div>
    );
  }
}

export default Registrati;
