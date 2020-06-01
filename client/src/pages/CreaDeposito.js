import React, { Component } from "react";
import Navbar from "../components/Nav/Navbar";
import Rete from "../pages/componenti_deposito/rete";
import InputD from "../pages/componenti_deposito/input_deposito";

class CreaDeposito extends Component {
  render() {
    console.log(this.props);
    const { rete, balance } = this.props;
    return (
      <div>
        <Navbar showMe={true}>Deposito</Navbar>
        <Rete rete={rete} balance={balance} />
        <InputD />
      </div>
    );
  }
}

export default CreaDeposito;
