import React, { Component } from "react";
import Title from "./login_components/Title";
import Connetti from "./login_components/Connetti";
import Registrati from "./login_components/Registrati";
import classes from "./login_components/Connetti.module.css";

export default class Login extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <div className={classes.Contenutox}>
          <Title />
          <Connetti onClick={this.props.connetti()} />
          <Registrati />
        </div>
      </div>
    );
  }
}
