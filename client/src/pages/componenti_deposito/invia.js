import React, { Component } from "react";
import classes from "../../components/home/Info.module.css";

class Invia extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={classes.Creab}>
        <button className={classes.Crea} onClick={this.props.deposita}>
          Deposita
        </button>
      </div>
    );
  }
}

export default Invia;
