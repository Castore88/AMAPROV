import React, { Component } from "react";
import Amazoff from "./contracts/Amazoff.json";
import getWeb3 from "./getWeb3";
/* import Navbar from "./components/Nav/Navbar";
import Info from "../src/components/home/info";
import Deposito from "../src/components/home/deposito"; */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import CreaDeposito from "./pages/CreaDeposito";
import Home from "./pages/Home";
import Preleva from "./pages/Preleva";

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
  }

  /*   componentWillUpdate(newProps, newState) {
    console.log("called before");
    console.log("NewProps", newProps);
    console.log("NewState", newState);
  }

  componentDidUpdate(preProps, preState) {
    console.log("call after the render Method()");
    console.log("PreProps", preProps);
    console.log("PreState", preState);
  } */

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      const rete = await web3.eth.net.getNetworkType();
      const balance = await web3.eth.getBalance(accounts[0], function (error, wei) {
        if (!error) {
          var eth = web3.utils.fromWei(wei, "ether");
          console.log(eth + " ETH");
        }
      });

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Amazoff.networks[networkId];

      const instance = new web3.eth.Contract(Amazoff.abi, deployedNetwork && deployedNetwork.address);

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
      alert(`Failed to load web3, accounts, or contract. Check console for details.`);
      console.error(error);
    }
  };
  //inizio

  //------------fine-----------------------

  setFriday = async () => {
    const { accounts, contract, giorno } = this.state;
    await contract.methods.setBlackFriday(giorno).send({ from: accounts[0] });
  };

  deposita = async () => {
    const { accounts, web3 } = this.state;
    web3.eth.sendTransaction(
      {
        from: accounts[0],
        to: "0x3B8fd72BE95751F3991cc60EE18B778ABA56268E",
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
    window.location.reload();
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

  onValueChange(key, event) {
    this.setState({ [key]: event.target.value }); // cambia valore di dove click
  }

  render() {
    console.log(this.state.amt);
    const { accounts, rete, balance } = this.state;
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
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
            <Login />
          </Route>

          <Route exact path="/home">
            <Home accounts={accounts} rete={rete} balance={balance} />
          </Route>

          <Route path="/Deposita">
            <CreaDeposito
              deposita={this.deposita}
              onValueChange={this.onValueChange.bind(this, "amt")}
              value={this.state.amt}
              rete={rete}
              balance={balance}
            />
          </Route>
          <Route parh="Preleva">
            <Preleva rete={rete} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
