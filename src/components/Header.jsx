import React from "react";
import "./styles.css";
import logo from "./logo.svg";

const Header = () => {
    return (
      <header>
        <nav className="nav">
          <img className="nav-logo" src={logo} />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  };

  export default Header

  