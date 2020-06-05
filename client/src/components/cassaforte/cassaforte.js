import React from "react";
import Group from "../../img/Group.png";
import safebx from "../../img/safebx.png";
import classes from "../../components/cassaforte/cassaforte.module.css";

function Cassaforte(props) {
  const { piena } = props;
  return (
    <div>
      {piena ? (
        <div className={classes.Contenitore}>
          {" "}
          <img className={classes.Bank} src={Group} alt=""></img>
          <div className={classes.Contenitore2}>
            <h2 className={classes.Time}>00.00.00</h2>
            <h2 className={classes.Time}>00.00 eth</h2>
            <button className={classes.Btndep}>Deposita</button>
          </div>
        </div>
      ) : (
        <div className={classes.Contenitore}>
          {" "}
          <img className={classes.Bank} src={safebx} alt=""></img>
          <div className={classes.Contenitore2}>
            <h2 className={classes.Time}>00.00.00</h2>
            <h2 className={classes.Time}>00.00 eth</h2>
            <button style={{ backgroundColor: "#37D260" }} className={classes.Btndep}>
              Preleva
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cassaforte;
