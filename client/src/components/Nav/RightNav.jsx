import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #556080;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    button {
      width: 200px;
    }

    h4 {
      font-size: 22px;
      text-align: center;
      width: 250px;
      margin-top: 50px;
      margin-bottom: 30px;
      font-weight: 400;
    }

    .eth {
      color: white;
      font-size: 18px;
      width: 250px;
      height: 50px;
      background-color: #09a6ee;
      border: none;
    }
    .storico {
      color: white;
      font-size: 18px;
      width: 250px;
      height: 50px;
      text-decoration: none;
      border: none;
      background-color: #556080;
      border: solid 1px white;
      margin: 15px 0 15px 0;
    }

    .disco {
      color: white;
      font-size: 18px;
      width: 250px;
      height: 50px;
      background-color: #e92d2d;
      border: none;
    }
    .disco-link {
      text-decoration: none;
      color: white;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <h4>Poi ottenere 1 ETH gratis solo utilizzando le rete di test </h4>
      <a
        href="https://faucet.metamask.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="eth">Ottieni 1 ETH </button>
      </a>
      <button className="storico">Storico cassaforti</button>
      <button className="disco">
        <a className="disco-link" href="/">
          Disconnettiti
        </a>
      </button>
    </Ul>
  );
};

export default RightNav;
