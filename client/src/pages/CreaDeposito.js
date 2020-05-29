import React, { Component } from "react";
import Navbar from "../components/Nav/Navbar";
import Rete from "../pages/componenti_deposito/rete";

class CreaDeposito extends Component {
  render() {
    const { showMe } = this.props;
    return (
      <div>
        <Navbar showMe={showMe} operation={this.operation} />
        <Rete />
      </div>
    );
  }
}

export default CreaDeposito;
