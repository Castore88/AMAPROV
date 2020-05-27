import React, { Component } from "react";
import classes from "./Info.module.css";
import safebx from "../../img/safebx.png";

class Info extends Component {
  render() {
    return (
      <div className={classes.Info}>
        <h3 id="rete" className={classes.Rete}>
          ...
        </h3>
        <h2>Address Metamask</h2>
        <h3 className={classes.Address} id="addres">
          ....
        </h3>
        <h2>Balance ETH</h2>
        <h3 className={classes.Balance} id="balance">
          ....
        </h3>
        <div className={classes.Info1}>
          <h2>Crea il tuo primo deposito</h2>
          <img src={safebx}></img>
        </div>
      </div>
    );
  }
}

export default Info;
