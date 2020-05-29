import React, { Component } from "react";

class CreaDeposito extends Component {
  render(props) {
    console.log(this.props);
    const { controlla } = this.props;
    return (
      <div>
        <h1>Bank-oink Timer</h1>
        <div className="metamask">
          <p id="balance"></p>
          <div className="pulsanti-metamask">
            <button id="deposit">Deposita</button>
            <button id="withdraw">Preleva</button>
          </div>
        </div>

        <div className="contenitore-input">
          <input
            id="seconds"
            className="smalltext"
            type="number"
            placeholder="Minutes..."
          />
          <div className="buttons">
            <input type="text" id="amount" placeholder="Ammontare..." />
          </div>
        </div>

        <div id="clockdiv">
          <div>
            <span className="days"></span>
            <div className="smalltext">Days</div>
          </div>
          <div>
            <span className="hours"></span>
            <div className="smalltext">Hours</div>
          </div>
          <div>
            <span className="minutes"></span>
            <div className="smalltext">Minutes</div>
          </div>
          <div>
            <span className="seconds"></span>
            <div className="smalltext">Seconds</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreaDeposito;
