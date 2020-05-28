import React, { Component } from "react";
import classes from "./Info.module.css";

class Deposito extends Component {
  render() {
    return (
      <div className={classes.Creab}>
        <button className={classes.Crea}>Crea il tuo deposito</button>
      </div>
    );
  }
}

export default Deposito;
