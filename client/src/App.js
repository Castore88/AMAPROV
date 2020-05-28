import React, { Component } from "react";
import Amazoff from "./contracts/Amazoff.json";
import getWeb3 from "./getWeb3";
import Navbar from "./components/Nav/Navbar";
import Info from "../src/components/home/info";
import Deposito from "../src/components/home/deposito";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storageValue: 0,
      web3: null,
      accounts: null,
      contract: null,
      giorno: 0,
      balance: null,
      rete: null,
    };
    this.deposita = this.deposita.bind(this);
    this.preleva = this.preleva.bind(this);
    this.setFriday = this.setFriday.bind(this);
    this.controlla = this.controlla.bind(this);
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      const rete = await web3.eth.net.getNetworkType();
      const balance = await web3.eth.getBalance(accounts[0], function (
        error,
        wei
      ) {
        if (!error) {
          var eth = web3.utils.fromWei(wei, "ether");
          console.log(eth + " ETH");
        }
      });

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
        {
          web3,
          accounts,
          balance: Math.round(web3.utils.fromWei(balance, "ether"), 4),
          rete,
          contract: instance,
        },
        console.log(accounts[0], rete)
      );
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  setFriday = async () => {
    const { accounts, contract, giorno } = this.state;
    await contract.methods.setBlackFriday(giorno).send({ from: accounts[0] });
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

  controlla = async () => {
    const { contract } = this.state;

    // Stores a given value, 5 by default.
    const amt = await contract.methods.getBalance().call();
    console.log(amt);

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

  convertiData = () => {
    const data = document.getElementById("data").value;
    const timestamp = Date.parse(data);
    this.setState({ giorno: timestamp });
    this.setFriday();
  };

  render() {
    const { accounts, rete, balance } = this.state;
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <Navbar />
        <Info bilancio={balance} rete={rete} indirizzo={accounts[0]} />
        <Deposito />
      </div>
    );
  }
}

export default App;
