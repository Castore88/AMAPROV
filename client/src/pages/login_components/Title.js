import React, { Component } from "react";
import classes from "../login_components/Connetti.module.css";
import logo from "../../img/Logo.png";
import metamask from "../../img/metamask.jpeg";

class Title extends Component {
  render() {
    return (
      <div className={classes.Contenuto}>
        <img className={classes.Logo} src={logo} alt=""></img>
        <p className={classes.Paragraffo}>
          Per accedere a Bank-oink è necessario avere un account Metamask, se ne
          possiedi già uno premi su Connetti a Metamask altrimenti Registrati in
          pochi secondi è crea il tuo wallet da utilizzare.
        </p>
        <img className={classes.Metamask} src={metamask} alt=""></img>
      </div>
    );
  }
}

export default Title;
