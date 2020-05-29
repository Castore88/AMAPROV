import React, { Component } from "react";
import classes from "./Info.module.css";
import { Link } from "react-router-dom";

class Deposito extends Component {
  render(props) {
    console.log(this.props);
    return (
      <div className={classes.Creab}>
        <button onClick={this.props.operation} className={classes.Crea}>
          {" "}
          <Link to="/deposita">Crea il tuo deposito</Link>
        </button>
      </div>
    );
  }
}

export default Deposito;
