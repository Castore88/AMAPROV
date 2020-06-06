import React, { Component } from "react";
import classes from "./Info.module.css";
import { Link } from "react-router-dom";

class Deposito extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={classes.Creab}>
        <Link to="/deposita">
          <button className={classes.Crea}> Crea il tuo deposito</button>
        </Link>
      </div>
    );
  }
}

export default Deposito;
