import React, { Component } from "react";
import Navbar from "../components/Nav/Navbar";
import Rete1 from "../pages/componenti_preleva/rete1";
import Btnpreleva from "./componenti_preleva/btnpreleva";

class Preleva extends Component {
  render() {
    const { rete, preleva } = this.props;
    return (
      <div>
        <Navbar showMe={true}>Preleva</Navbar>
        <Rete1 rete={rete} />
        <Btnpreleva preleva={preleva} />
      </div>
    );
  }
}

export default Preleva;
