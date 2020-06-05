import React, { Component } from "react";
import Navbar from "../components/Nav/Navbar";
import Rete1 from "../pages/componenti_preleva/rete1";

import Btnpreleva from "./componenti_preleva/btnpreleva";

class Preleva extends Component {
  render() {
    console.log(this.props);
    const { rete, balance } = this.props;
    return (
      <div>
        <Navbar showMe={true}>Preleva</Navbar>
        <Rete1 rete={rete} />
        <Btnpreleva />
      </div>
    );
  }
}

export default Preleva;
