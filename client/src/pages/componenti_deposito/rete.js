import React, { Component } from "react";
import classes from "../../components/home/Info.module.css";
import safebx from "../../img/safebx.png";

class Rete extends Component {
  render() {
    return (
      <div className={classes.Info}>
        <h2>Rete Ethereum </h2>
        <h3 id="rete" className={classes.Rete}>
          {" "}
          {this.props.rete}{" "}
        </h3>
        <img className={classes.Safe} src={safebx} alt=""></img>
        <h2>Balance ETH</h2>
        <h3 className={classes.Balance} id="balance">
          {" "}
          {this.props.balance}{" "}
        </h3>
      </div>
    );
  }
}

export default Rete;
