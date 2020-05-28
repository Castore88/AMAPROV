import React, { Component } from "react";
import Navbar from "../components/Nav/Navbar";
import Info from "../components/home/info";
import Deposito from "../components/home/deposito";

export default class Home extends Component {
  render(props) {
    console.log(this.props);
    const { accounts, rete, balance } = this.props;
    return (
      <div className="App">
        <Navbar />
        <Info bilancio={balance} rete={rete} indirizzo={accounts[0]} />
        <Deposito />
      </div>
    );
  }
}
