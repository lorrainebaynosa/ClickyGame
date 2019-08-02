import React from "react";
import "./style.css";

function GameReset () {
  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <a className="ClickyGame" href="/">Clicky Game</a>
      <a className="Intro" href="/">Click an image to begin!</a>
      <a className="Score" href="/">Score:0 | Top Score: 0 </a>
    </nav>
  );
}

export default GameReset;
