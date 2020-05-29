import React, { Component } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import Title from "../../pages/login_components/Title";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
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
    top: 10px;
    position: absolute;
    left: 18px;
    
}
  }
`;
    console.log(this.props);

    return (
      <Nav>
        <div className="logo">
          {this.props.showMe ? <i className="fas fa-angle-left"></i> : null}

          <h3></h3>
        </div>

        <Burger />
      </Nav>
    );
  }
}

export default Navbar;
