import React, { Component } from "react";
import classes from "../../components/home/Info.module.css";

class Btnpreleva extends Component {
  render() {
    return (
      <div className={classes.InfoD}>
        <h3>La cassaforte è sbloccata preleva tutti i tuoi Eth </h3>
        <button className={classes.Preleva}>Preleva</button>
      </div>
    );
  }
}

export default Btnpreleva;
