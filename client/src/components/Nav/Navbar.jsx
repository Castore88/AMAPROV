import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;

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
    display: none;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <i className="fas fa-angle-left"></i>
        <h3>Home</h3>
      </div>

      <Burger />
    </Nav>
  );
};

export default Navbar;
