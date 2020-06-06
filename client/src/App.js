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
      web3: null,
      accounts: null,
      contract: null,
      giorno: 0,
      balance: null,
      rete: null,
      amt: 0,
      bal: 0,
      idCasseforti: [],
      loading: false,
    };
    this.deposita = this.deposita.bind(this);
    this.preleva = this.preleva.bind(this);
    this.controlla = this.controlla.bind(this);
    this.addBank = this.addBank.bind(this);
    this.setOra = this.setOra.bind(this);
  }

  addBank = (id) => {
    this.setState({
      idCasseforti: [id, ...this.state.idCasseforti],
    });
  };

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

  //inizio Cambiare il valore delle imput
  onValueChange(key, event) {
    this.setState({ [key]: event.target.value });
  }
  //------------fine-----------------------

  //----------------Richiamo per prendere il timestamp dalla funzione del contratto
  setOra = async () => {
    const { contract } = this.state;
    let timestamp;
    await contract.methods
      .getNow()
      .call()
      .then(
        (result) => (result = timestamp)
        /* contract.methods
          .setBlackFriday(result, this.state.idCasseforti)
          .send({ from: accounts[0] }) */
      );
    console.log(timestamp);
  };
  //-----------------------------------------

  //-----------------Funzione per prelevare--------------------
  preleva = async () => {
    const { accounts, contract } = this.state;

    await contract.methods
      .withdraw(this.state.idCasseforti)
      .send(
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
      )
      .on("confirmation", (reciept) => {
        this.setState({ loading: true });
      });
  };
  //-----------------Funzione per prelevare--------------------

  //-----------------Funzione per depositare e fissare il tempo--------------------
  deposita = async () => {
    const { accounts, contract, web3 } = this.state;

    //-----------------Deposito--------------------
    await contract.methods
      .deposit(this.state.idCasseforti)
      .send(
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
      )
      .on("confirmation", () => {
        web3.eth.getBalance(accounts[0], function (error, result) {
          if (!error) {
            console.log(error);
          } else {
            this.setState({ balance: result });
          }
        });
      });
  };

  controlla = async () => {
    const { contract } = this.state;
    const amt = await contract.methods.getBalance().call();
    console.log(amt);
  };

  render() {
    const { accounts, rete, balance, web3 } = this.state;
    console.log(this.state.amt);
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Router>
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
              casseforti={this.state.idCasseforti}
              web3={web3}
            />
          </Route>

          <Route path="/Deposita">
            <CreaDeposito
              rete={rete}
              balance={balance}
              value={this.state.amt}
              onValueChange={this.onValueChange.bind(this, "amt")}
              giorno={this.state.giorno}
              onDateChange={this.onValueChange.bind(this, "giorno")}
              setOra={this.setOra}
              deposita={this.deposita}
              onSubmit={this.addBank}
            />
          </Route>
          <Route parh="Preleva">
            <Preleva
              rete={rete}
              preleva={this.preleva}
              idCasseforti={this.state.idCasseforti}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
