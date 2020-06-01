import React, { Component } from "react";
import Navbar from "../components/Nav/Navbar";
import Rete from "../pages/componenti_deposito/rete";

class CreaDeposito extends Component {
  render() {
    return (
      <div>
        <Navbar showMe={true}>Deposito</Navbar>
        <Rete />
      </div>
    );
  }
}

export default CreaDeposito;
