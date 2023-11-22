import { React } from "react";
import logo from "../images/react-logo.png";
import "./styles.css";


const NavBar = () => {
  return (
    <nav>
      <img src={logo} className="nav--icon"/>
      <h3 className="nav--logo-text">ReactFacts</h3>
      <h4 className="nav--title">React course - project 1</h4>
    </nav>
  );
};

export default NavBar;
