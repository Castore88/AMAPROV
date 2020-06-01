import React, { Component } from "react";
import Amazoff from "./contracts/Amazoff.json";
import getWeb3 from "./getWeb3";
/* import Navbar from "./components/Nav/Navbar";
import Info from "../src/components/home/info";
import Deposito from "../src/components/home/deposito"; */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreaDeposito from "./pages/CreaDeposito";

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
      amt: 0,
      bal: 0,
    };
    this.deposita = this.deposita.bind(this);
    this.preleva = this.preleva.bind(this);
    this.setFriday = this.setFriday.bind(this);
    this.connetti = this.connetti.bind(this);
  }

  connetti = async () => {
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

      if (
        typeof window.ethereum !== "undefined" ||
        typeof window.web3 !== "undefined"
      ) {
        // Web3 browser user detected. You can now use the provider.
        const provider = window["ethereum"] || window.web3.current;

        //Get access to Metamask

        await provider
          .enable()
          .then((accounts) => {
            alert("Accesso consentito");
            console.log(accounts);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log("Metamask non presente");
      }

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
    const { accounts, web3 } = this.state;

    web3.eth.sendTransaction(
      {
        from: accounts[0],
        to: "0x223E10fbf0b1315f38D62Df3047120AB64D2c76b",
        value: web3.utils.toWei(this.state.amt),
      },
      function (err, transactionHash) {
        if (err) {
          console.log(err);
        } else {
          console.log(transactionHash);
        }
      }
    );
  };

  preleva = async () => {
    const { accounts, contract } = this.state;

    await contract.methods.withdraw(this.state.amt).send({ from: accounts[0] });
    console.log("Hai cliccato sul link.");
  };

  bilancio = async () => {
    const { web3 } = this.state;
    const bal = await web3.eth.getBalance(
      "0x223E10fbf0b1315f38D62Df3047120AB64D2c76b",
      function (error, wei) {
        if (!error) {
          var eth = web3.utils.fromWei(wei, "ether");
          console.log(eth + " ETH");
        }
      }
    );
    await this.setState({ bal: bal });
  };

  convertiData = () => {
    const data = document.getElementById("data").value;
    const timestamp = Date.parse(data);
    this.setState({ giorno: timestamp });
    this.setFriday();
  };
  // cambiare lo stato di amt dentro il componente

  onValueChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  // cambiare lo state di amt dentro il componente

  render() {
    const { accounts, rete, balance, web3 } = this.state;

    return (
      <Router>
        {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
        <Switch>
          <Route exact path="/">
            <Login
              connetti={this.connetti}
              accounts={accounts}
              rete={rete}
              balance={balance}
            />
          </Route>

          <Route exact path="/home">
            <Home
              web3={web3}
              accounts={accounts}
              rete={rete}
              balance={balance}
            />
          </Route>

          <Route path="/Deposita">
            <CreaDeposito
              preleva={this.preleva}
              deposita={this.deposita}
              bilancio={this.bilancio}
              value={this.state.amt}
              bal={this.state.bal}
              onValueChange={this.onValueChange.bind(this, "amt")}
            ></CreaDeposito>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
