import React, { Component } from "react";
import classes from "../../components/home/Info.module.css";

class Invia extends Component {
  render() {
    return (
      <div className={classes.Creab}>
        <button onClick={this.props.deposita} className={classes.Crea}>
          Deposita
        </button>
      </div>
    );
  }
}

export default Invia;
