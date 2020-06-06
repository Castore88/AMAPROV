import React from "react";
import Group from "../../img/Group.png";
import safebx from "../../img/safebx.png";
import classes from "../../components/cassaforte/cassaforte.module.css";
import { Link } from "react-router-dom";

class Cassaforte extends React.Component {
  render() {
    const { piena, web3 } = this.props;
    web3.eth.getBalance("0x223E10fbf0b1315f38D62Df3047120AB64D2c76b", function (
      error,
      wei
    ) {
      if (!error) {
        var eth = web3.utils.fromWei(wei, "ether");
        console.log(eth + "ETH");
      }
    });

    return (
      <div>
        {piena ? (
          <div className={classes.Contenitore}>
            {" "}
            <img className={classes.Bank} src={Group} alt=""></img>
            <div className={classes.Contenitore2}>
              <h2 className={classes.Time}>00.00.00</h2>
              <h2 className={classes.Time}>00.00 eth</h2>
              <Link to="/deposita" refresh="true" className={classes.Link}>
                <button className={classes.Btndep}>Deposita</button>
              </Link>
            </div>
          </div>
        ) : (
          <div className={classes.Contenitore}>
            {" "}
            <img className={classes.Bank} src={safebx} alt=""></img>
            <div className={classes.Contenitore2}>
              <h2 className={classes.Time}>00.00.00</h2>
              <h2 className={classes.Time}> 00.00.00 eth</h2>
              <Link to="/preleva" refresh="true" className={classes.Link}>
                <button
                  style={{ backgroundColor: "#37D260" }}
                  className={classes.Btndep}
                >
                  Preleva
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Cassaforte;
