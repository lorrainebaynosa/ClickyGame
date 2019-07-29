import React from "react";
import Counter from "./components/Counter";
import "../styles/Navbar.css";

 function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-light bg-light">
        <a className="ClickyGame" href="/">Clicky Game</a>
        <a className="Score" href="/">Score: {count} </a> 
        |
        <a className="TopScore" href="/">Top Score: {topScore}</a>
      </nav>
    );
  }
  
  export default Navbar;