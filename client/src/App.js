import React, { Component } from "react";
import Amazoff from "./contracts/Amazoff.json";
import getWeb3 from "./getWeb3";
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
      idCasseforti: 8,
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
  //inizio
  onValueChange(key, event) {
    this.setState({ [key]: event.target.value });
  }
  //------------fine-----------------------

  setFriday = async () => {
    const { accounts, contract, giorno } = this.state;
    await contract.methods.setBlackFriday(giorno).send({ from: accounts[0] });
  };

  preleva = async () => {
    const { accounts, contract } = this.state;

    await contract.methods.withdraw(this.state.idCasseforti).send(
      {
        from: accounts[0],
      },
      function (err, transactionHash) {
        if (err) {
          console.log(err);
        } else {
          /*           this.setState({ bal: this.state.amt });
           */ console.log(transactionHash);
        }
      }
    );
  };

  deposita = async () => {
    const { accounts, contract, web3 } = this.state;

    await contract.methods.deposit(this.state.idCasseforti).send(
      {
        from: accounts[0],
        value: web3.utils.toWei(this.state.amt, "ether"),
      },
      function (err, transactionHash) {
        if (err) {
          console.log(err);
        } else {
          /* this.setState({ bal: this.state.amt }); */
          console.log(transactionHash);
        }
      }
    );
  };

  controlla = async () => {
    const { contract } = this.state;
    const amt = await contract.methods.getBalance().call();
    console.log(amt);
  };

  convertiData = () => {
    const data = document.getElementById("data").value;
    const timestamp = Date.parse(data);
    this.setState({ giorno: timestamp });
    this.setFriday();
  };

  render() {
    const { accounts, rete, balance } = this.state;
    console.log(this.state.amt);
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
            <Home
              accounts={accounts}
              rete={rete}
              balance={balance}
              bal={this.state.bal}
              casseforti={this.state.casseforti}
            />
          </Route>

          <Route path="/Deposita">
            <CreaDeposito
              rete={rete}
              balance={balance}
              value={this.state.amt}
              onValueChange={this.onValueChange.bind(this, "amt")}
              deposita={this.deposita}
              preleva={this.preleva}
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
