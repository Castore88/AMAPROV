import React, { Component } from "react";
import classes from "../../components/home/Info.module.css";

class Invia extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={classes.Creab}>
<<<<<<< HEAD
        <button className={classes.Crea} onClick={this.props.deposita}>
=======
        <button onClick={this.props.deposita} className={classes.Crea}>
>>>>>>> 87115f3b1164506e5c973bb5128ebb8090adad04
          Deposita
        </button>
      </div>
    );
  }
}

export default Invia;
