import React, { Component } from "react";
import classes from "./Info.module.css";

class Deposito extends Component {
  render() {
    console.log(this.props);
    const { azione } = this.props;
    return (
      <div className={classes.Creab}>
        <button className={classes.Crea} onClick={azione}>
          Crea il tuo deposito
        </button>
      </div>
    );
  }
}

export default Deposito;
