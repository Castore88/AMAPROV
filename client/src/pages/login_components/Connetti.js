import React, { Component } from "react";
import classes from "../login_components/Connetti.module.css";
import { Link } from "react-router-dom";

class Connetti extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button className={classes.Connetti}>
          <Link className={classes.linkConnetti} to="/home">
            Connettiti a Metamask
          </Link>
        </button>
      </div>
    );
  }
}

export default Connetti;
