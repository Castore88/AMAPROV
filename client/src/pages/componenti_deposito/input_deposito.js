import React, { Component } from "react";
import classes from "../../components/home/Info.module.css";

class InputD extends Component {
  render() {
    return (
      <div className={classes.InfoD}>
        <input className={classes.Titolo} placeholder="Titolo cassaforte" type="text"></input>
        <input className={classes.Timer} type="time"></input>
        <input onChange={this.props.onValueChange} value={this.props.value} className={classes.Eth} placeholder="00.00 Eth" type="number"></input>
      </div>
    );
  }
}

export default InputD;
