import React, { Component } from "react";
import classes from "../../components/home/Info.module.css";
import { Link } from "react-router-dom";

class InputD extends Component {
  constructor(props) {
    super(props);
    this.state = { ora: 0 };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: Math.round(Math.random() * 1000),
    });
    await this.props.deposita();
    await this.props.setOra();
  };

  render() {
    console.log(this.props);

    return (
      <form className={classes.InfoD} onSubmit={this.handleSubmit}>
        <input
          className={classes.Titolo}
          placeholder="Titolo cassaforte"
          type="text"
        ></input>
        <input
          className={classes.Timer}
          type="number"
          id="time"
          value={this.props.giorno}
          onChange={this.props.onDateChange}
        ></input>
        <input
          onChange={this.props.onValueChange}
          value={this.props.value}
          className={classes.Eth}
          placeholder="00.00 Eth"
          type="number"
        ></input>
        <Link to="/home">
          <button
            onClick={this.handleSubmit}
            className={classes.Crea}
            style={{ marginTop: "50px" }}
          >
            Deposita
          </button>
        </Link>
      </form>
    );
  }
}

export default InputD;
