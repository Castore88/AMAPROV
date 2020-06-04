import React, { Component } from "react";
import styled from "styled-components";
import Burger from "./Burger";

import { Link } from "react-router-dom";

class Navbar extends Component {
  render(props) {
    const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  position: relative;

 

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

  .LinkI {
    font-size: 35px;
    text-align:center;
    position: absolute;
    left: 18px;
    color:white;
    top: 3px;
    
}
  }
`;
    console.log(this.props);
    const { showMe } = this.props;

    return (
      <Nav>
        <div className="logo">
          {showMe ? (
            <Link className="LinkI" to="/home">
              <i className="fas fa-angle-left"></i>
            </Link>
          ) : null}

          <h3>{this.props.children}</h3>
        </div>

        <Burger />
      </Nav>
    );
  }
}

export default Navbar;
