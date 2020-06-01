import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  position: relative;

  /* 
  Potenziale Errore 
  padding: 0 20px;
 */

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #556080;
  color: white;

  .logo {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
  }

  i {
    font-size: 35px;
  }

  .linkI {
    position: absolute;
    left: 19px;
    color: white;
  }
`;

const Navbar = (props) => {
  const showMe = props.showMe;
  return (
    <Nav>
      {showMe ? (
        <Link className="linkI" to="/home">
          {" "}
          <i className="fas fa-angle-left" />{" "}
        </Link>
      ) : null}

      <div className="logo">
        <h3>{props.children}</h3>
      </div>

      <Burger />
    </Nav>
  );
};

export default Navbar;
