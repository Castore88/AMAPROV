import React, { Component } from "react";
import classes from "../login_components/Connetti.module.css";
import { Link } from "react-router-dom";

class Connetti extends Component {
  render() {
    return (
      <div>
        <button className={classes.Connetti}>
          <Link to="/home">Connettiti a Metamask</Link>
        </button>
      </div>
    );
  }
}

export default Connetti;
