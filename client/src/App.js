import React, { Component } from "react";
import Amazoff from "./contracts/Amazoff.json";
import getWeb3 from "./getWeb3";
import { Header, ActionButton } from "./components";
import elephant from "./elephant-savings.svg";
import amazoff_logo from "./amazoff-logo.svg";
import widthdraw from "./withdraw.svg";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storageValue: 0,
      web3: null,
      accounts: null,
      contract: null,
    };
    this.deposita = this.deposita.bind(this);
    this.preleva = this.preleva.bind(this);
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Amazoff.networks[networkId];
      const instance = new web3.eth.Contract(
        Amazoff.abi,
        deployedNetwork && deployedNetwork.address
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState(
        { web3, accounts, contract: instance },
        console.log(accounts[0])
      );
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  deposita = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.deposit().send({ from: accounts[0] });
    console.log("Hai cliccato sul link.");
    // Get the value from the contract to prove it worked.
    /* const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response }); */
  };
  preleva = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.withdraw().send({ from: accounts[0] });
    console.log("Hai cliccato sul link.");
    // Get the value from the contract to prove it worked.
    /* const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response }); */
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <Header className="layout-header" logo={amazoff_logo} />
        <div className="layout-content">
          <div className="button-row">
            <ActionButton
              icon={elephant}
              label="Deposit"
              id="deposita"
              azione={this.deposita}
            />
            <ActionButton
              iconClass="widthdraw-icon"
              icon={widthdraw}
              label="Withdraw"
              azione={this.preleva}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
