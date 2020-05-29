import React, { Component } from "react";
import Title from "./login_components/Title";
import Connetti from "./login_components/Connetti";
import Registrati from "./login_components/Registrati";
import classes from "./login_components/Connetti.module.css";

export default class Login extends Component {
  connectMm = (e) => {
    if (
      typeof window.ethereum !== "undefined" ||
      typeof window.web3 !== "undefined"
    ) {
      // Web3 browser user detected. You can now use the provider.
      const provider = window["ethereum"] || window.web3.current;

      //Get access to Metamask
      provider
        .enable()
        .then((accounts) => {
          alert("Accesso consentito");
          console.log(accounts);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Metamask non presente");
    }
  };

  componentWillUnmount() {
    this.connectMm();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className={classes.Contenutox}>
          <Title />
          <Connetti
            connetti={(event) => {
              this.connectMm();
            }}
          />
          <Registrati />
        </div>
      </div>
    );
  }
}
