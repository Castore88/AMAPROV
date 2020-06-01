import React, { Component } from "react";
import Navbar from "../components/Nav/Navbar";
import Info from "../components/home/info";
import Deposito from "../components/home/deposito";

export default class Home extends Component {
  render() {
    const { accounts, rete, balance, web3 } = this.props;
    if (!web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <Navbar showMe={false}>Home</Navbar>
        <Info bilancio={balance} rete={rete} indirizzo={accounts[0]} />
        <Deposito />
      </div>
    );
  }
}
