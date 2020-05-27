import React, { Component } from "react";
import classes from "./Info.module.css";
import safebx from "../../img/safebx.png";

class Info extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={classes.Info}>
        <h3 id="rete" className={classes.Rete}>
          {this.props.rete}
        </h3>
        <h2>Address Metamask</h2>
        <h3 className={classes.Address} id="addres">
          {this.props.indirizzo}
        </h3>
        <h2>Balance ETH</h2>
        <h3 className={classes.Balance} id="balance">
          {this.props.bilancio}
        </h3>
        <div className={classes.Info1}>
          <h2>Crea il tuo primo deposito</h2>
          <img src={safebx} alt=""></img>
        </div>
      </div>
    );
  }
}

export default Info;
