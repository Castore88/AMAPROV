import React, { Component } from "react";
import Navbar from "../components/Nav/Navbar";
import Info from "../components/home/info";
import Deposito from "../components/home/deposito";
import Cassaforte from "../components/cassaforte/cassaforte";

export default class Home extends Component {
  render() {
    console.log(this.props);
    const { accounts, rete, balance, casseforti } = this.props;
    const listaCassaforti = casseforti.map((newCassaforte) => (
      <Cassaforte key={newCassaforte} web3={this.props.web3} />
    ));
    return (
      <div className="App">
        <Navbar showMe={false}>Home</Navbar>
        <Info bilancio={balance} rete={rete} indirizzo={accounts[0]} />
        <Deposito />
        {listaCassaforti}
      </div>
    );
  }
}
