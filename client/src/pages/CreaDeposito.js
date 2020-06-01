import React, { Component } from "react";
import Navbar from "../components/Nav/Navbar";

class CreaDeposito extends Component {
  render() {
    return (
      <div>
        <Navbar showMe={true}> Deposito</Navbar>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <h1>Bank-oink Timer</h1>
            <div className="metamask">
              <p id="balance"></p>
              <div className="pulsanti-metamask">
                <button id="deposit" onClick={this.props.deposita}>
                  Deposita
                </button>
                <button id="withdraw" onClick={this.props.preleva}>
                  Preleva
                </button>
                <button id="bilancio" onClick={this.props.bilancio}>
                  Bilancio
                </button>
              </div>
            </div>
            <h1>{this.props.bal}</h1>
            <div className="contenitore-input">
              <input
                id="seconds"
                className="smalltext"
                type="number"
                placeholder="Minutes..."
              />
              <div className="buttons">
                <input
                  type="text"
                  id="amount"
                  placeholder="Ammontare..."
                  onChange={this.props.onValueChange}
                  value={this.props.value}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreaDeposito;
