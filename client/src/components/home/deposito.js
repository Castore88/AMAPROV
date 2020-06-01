import React, { Component } from "react";
import classes from "./Info.module.css";
import { Link } from "react-router-dom";

class Deposito extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={classes.Creab}>
        <button className={classes.Crea}>
          {" "}
          <Link to="/deposita">Crea il tuo deposito</Link>
        </button>
      </div>
    );
  }
}

export default Deposito;
