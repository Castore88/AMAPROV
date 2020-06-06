import React, { Component } from "react";
import classes from "../../components/home/Info.module.css";
import Link from "react-router-dom";

class Invia extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={classes.Creab}>
        <Link to="/home">
          <button onClick={this.props.deposita} className={classes.Crea}>
            Deposita
          </button>
        </Link>
      </div>
    );
  }
}

export default Invia;
