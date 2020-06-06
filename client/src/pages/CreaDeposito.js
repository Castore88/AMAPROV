import React, { Component } from "react";
import Navbar from "../components/Nav/Navbar";
import Rete from "../pages/componenti_deposito/rete";
import InputD from "../pages/componenti_deposito/input_deposito";

class CreaDeposito extends Component {
  render() {
    console.log(this.props);
    const {
      rete,
      balance,
      value,
      onValueChange,
      deposita,
      onDateChange,
      giorno,
      onSubmit,
      setOra,
    } = this.props;

    return (
      <div>
        <Navbar showMe={true}>Deposito</Navbar>
        <Rete rete={rete} balance={balance} />
        <InputD
          value={value}
          onValueChange={onValueChange}
          onDateChange={onDateChange}
          giorno={giorno}
          setOra={setOra}
          deposita={deposita}
          onSubmit={onSubmit}
        />
      </div>
    );
  }
}

export default CreaDeposito;
