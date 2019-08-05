import React from "react";
import "./style.css";

function NavBar({message, score, topScore}) {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <a className="ClickyGame" href="/">Clicky Game</a>
      <a className="Message" href="/">{message}</a>
      <a className="Score" href="/">Score: {score} | Top Score: {topScore}</a>
    </nav>
  );
}

export default NavBar;



