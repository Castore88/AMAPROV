import React, { Component } from "react";
import "./componenteProva.css";

class ComponenteProva extends Component {
  render() {
    console.log(this.props);
    const { azione } = this.props;
    return (
      <div className="contenitore-prova">
        <input type="date" placeholder="eccomi qui" id="data" />
        <button className="btn-prova" onClick={azione}>
          Set
        </button>
      </div>
    );
  }
}

export default ComponenteProva;
